import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { College } from '../types';

export function useColleges(filters?: {
  type?: string;
  location?: string;
  entranceExam?: string;
  maxFees?: number;
}) {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchColleges() {
      try {
        let q = query(collection(db, 'colleges'));

        if (filters?.type) {
          q = query(q, where('type', '==', filters.type));
        }
        if (filters?.location) {
          q = query(q, where('location', '==', filters.location));
        }
        if (filters?.entranceExam) {
          q = query(q, where('entranceExams', 'array-contains', filters.entranceExam));
        }
        if (filters?.maxFees) {
          q = query(q, where('averageFees', '<=', filters.maxFees));
        }

        const querySnapshot = await getDocs(q);
        const collegeData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as College[];

        setColleges(collegeData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch colleges'));
        setLoading(false);
      }
    }

    fetchColleges();
  }, [filters]);

  return { colleges, loading, error };
}