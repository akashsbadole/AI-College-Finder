import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const counselingContext = `You are an AI educational counselor helping students with their academic and career decisions. 
Your role is to:
1. Provide guidance on college selection, course choices, and career paths
2. Help students understand their strengths and interests
3. Suggest appropriate entrance exams and preparation strategies
4. Offer advice on time management and study techniques
5. Provide information about scholarships and financial aid
6. Guide students through the college application process

Always maintain a supportive and encouraging tone while providing accurate and relevant information.`;

export async function getCounselingResponse(userMessage: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: counselingContext,
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting counseling response:", error);
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later or use the contact form to schedule a session with a human counselor.";
  }
} 