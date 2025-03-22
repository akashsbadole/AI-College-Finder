import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

export function useAuth() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useClerkAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  const getUserToken = async (): Promise<string | null> => {
    try {
      const token = await getToken();
      return token || null;
    } catch (error) {
      console.error('Error getting user token:', error);
      return null;
    }
  };

  return {
    user,
    isSignedIn,
    loading,
    getUserToken
  };
}