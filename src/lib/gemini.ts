import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getCollegeRecommendations(preferences: {
  examType: string;
  score: number;
  location: string;
  budget: number;
  stream: string;
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `As an Indian education counselor, recommend colleges based on:
    - Exam: ${preferences.examType}
    - Score: ${preferences.score}
    - Location: ${preferences.location}
    - Budget: ₹${preferences.budget}
    - Stream: ${preferences.stream}
    
    Provide a list of 5 best colleges with their key details including:
    1. College name
    2. Expected cutoff
    3. Fees structure
    4. Notable placements
    5. Key advantages`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw error;
  }
}

export async function getExamPreparationGuide(exam: string, subject: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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