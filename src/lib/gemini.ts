import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface CollegeQueryParams {
  examType: string;
  score: number;
  location: string;
  budget: number;
  stream: string;
}

interface CollegeDetails {
  collegeName: string;
  establishedYear: string;
  rating: string;
  university: string;
  courses: string[];
  facilities: string[];
  city: string;
  state: string;
  country: string;
  collegeType: string;
  averageFees: string;
  details: string;
}

export const getCollegeRecommendations = async (params: CollegeQueryParams): Promise<CollegeDetails[]> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"  });

    const prompt = `Provide information about top colleges matching the search "${params.stream}". 
    Return ONLY a valid JSON array without any markdown formatting, code blocks, or additional text.
    Each object should have this exact structure:
    {
      "collegeName": string,
      "establishedYear": string,
      "rating": string,
      "university": string,
      "courses": string[],
      "facilities": string[],
      "city": string,
      "state": string,
      "country": "India",
      "collegeType": string,
      "averageFees": string,
      "details": string
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up the response
    text = text.replace(/```json\n?/g, '')  // Remove ```json
             .replace(/```\n?/g, '')         // Remove closing ```
             .replace(/^\s+|\s+$/g, '');     // Trim whitespace
    
    try {
      // Parse the cleaned JSON response
      const colleges: CollegeDetails[] = JSON.parse(text);
      return colleges;
    } catch (parseError) {
      console.error('Raw response:', text);
      console.error('Parse error:', parseError);
      
      // Fallback mock data if parsing fails
      return [{
        collegeName: "IIT Bombay",
        establishedYear: "1958",
        rating: "4.8",
        university: "Indian Institute of Technology Bombay",
        courses: ["B.Tech", "M.Tech", "PhD"],
        facilities: ["World-class laboratories", "Sports Complex", "Research Centers"],
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        collegeType: "Public Institute of National Importance",
        averageFees: "₹2.2 Lakhs per year",
        details: "IIT Bombay is one of India's premier engineering institutions known for excellence in education and research."
      }];
    }
  } catch (error) {
    console.error('Error fetching college recommendations:', error);
    throw error;
  }
};

export async function getExamPreparationGuide(exam: string, subject: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Create a detailed study guide for ${exam} ${subject} preparation including:
    1. Important topics and their weightage
    2. Recommended books and study materials
    3. Previous year question analysis
    4. Time management tips
    5. Common mistakes to avoid`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting study guide:', error);
    throw error;
  }
}