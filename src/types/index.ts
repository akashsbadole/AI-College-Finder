export interface College {
  id: string;
  name: string;
  type: string;
  location: string;
  courses: string[];
  entranceExams: string[];
  averageFees: number;
  ranking: number;
  cutoffs: {
    [key: string]: number;
  };
  placements: {
    averagePackage: number;
    topCompanies: string[];
  };
}

export interface User {
  uid: string;
  email: string;
  preferences?: {
    examType?: string;
    targetScore?: number;
    preferredLocations?: string[];
    budget?: number;
    stream?: string;
  };
  savedColleges?: string[];
  searchHistory?: Array<{
    timestamp: number;
    query: string;
  }>;
}

export interface ExamPrep {
  id: string;
  examName: string;
  subject: string;
  content: string;
  lastUpdated: number;
}