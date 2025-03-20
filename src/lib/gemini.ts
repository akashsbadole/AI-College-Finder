import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getCollegeRecommendations({
  examType,
  score,
  location,
  budget,
  stream,
}: {
  examType: string;
  score: number;
  location: string;
  budget: number;
  stream: string;
}): Promise<string[]> {
  console.log("API Call Params:", { examType, score, location, budget, stream }); // Debug log
  // Mock implementation for demonstration purposes
  // Replace this with actual API call
  const mockData: { [key: string]: string[] } = {
    engineering: ["IIT Delhi", "IIT Bombay", "NIT Trichy"],
    medical: ["AIIMS Delhi", "CMC Vellore", "JIPMER"],
    management: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta"],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = mockData[stream.toLowerCase() as keyof typeof mockData] || [];
      console.log("API Call Result:", result); // Debug log
      resolve(result);
    }, 1000);
  });
}

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