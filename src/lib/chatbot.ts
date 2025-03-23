import { HfInference } from '@huggingface/inference';

// Initialize Hugging Face client
const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

// Predefined responses for common counseling queries
const predefinedResponses: { [key: string]: string } = {
  "study tips": "Here are some effective study tips:\n1. Create a study schedule and stick to it\n2. Take regular breaks (25 minutes study, 5 minutes break)\n3. Use active recall techniques\n4. Stay organized with notes and materials\n5. Get adequate sleep and maintain a healthy lifestyle",
  
  "entrance exam": "For entrance exam preparation:\n1. Start early and create a study plan\n2. Practice with previous year papers\n3. Focus on weak areas\n4. Join study groups or coaching classes\n5. Take regular mock tests\n6. Maintain good health and manage stress",
  
  "career options": "I can help you explore career options. Please specify your interests or field of study, and I can provide detailed information about:\n1. Available career paths\n2. Required qualifications\n3. Job prospects\n4. Salary expectations\n5. Growth opportunities",
  
  "college selection": "When selecting a college, consider these factors:\n1. Course curriculum and quality\n2. Faculty expertise\n3. Infrastructure and facilities\n4. Placement records\n5. Location and accessibility\n6. Cost and scholarships\n7. Campus culture and environment",
  
  "personal development": "For personal development:\n1. Set clear goals\n2. Develop time management skills\n3. Build effective communication\n4. Practice self-reflection\n5. Learn stress management\n6. Develop leadership qualities\n7. Maintain work-life balance",

  "hello": "Hello! I'm your AI counselor. How can I help you today?",
  
  "help": "I can help you with:\n1. Academic guidance and study tips\n2. Career counseling and job prospects\n3. College selection advice\n4. Entrance exam preparation\n5. Personal development\n\nWhat would you like to know more about?",
  
  "thanks": "You're welcome! Feel free to ask more questions anytime.",
  
  "bye": "Goodbye! If you need more help, don't hesitate to come back.",
  
  "default": "I understand you're asking about education and counseling. Could you please be more specific about what you'd like to know? I can help with study tips, career guidance, college selection, exam preparation, or personal development."
};

export async function getChatbotResponse(message: string): Promise<string> {
  try {
    // Check for predefined responses first
    const lowerMessage = message.toLowerCase();
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // If no predefined response, use the AI model
    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: `As an educational counselor, I would say: ${message}`,
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7,
        top_p: 0.95,
        do_sample: true,
        return_full_text: false
      },
    });

    // Clean up the response
    let cleanResponse = response.generated_text || predefinedResponses.default;
    cleanResponse = cleanResponse.replace(/As an educational counselor, I would say:/, '').trim();
    
    return cleanResponse || predefinedResponses.default;
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    // Return a predefined response in case of error
    return predefinedResponses.default;
  }
} 