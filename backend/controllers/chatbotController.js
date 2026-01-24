import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatbotController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const systemPrompt = `
You are an MBA admission assistant chatbot of Institute of Engineering and Management.
Rules:
- Answer only about MBA admissions, exams, fees, and colleges
- If asked unrelated questions, reply:
  "I can only help with MBA admission queries."
- Keep answers short and professional
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `${systemPrompt}\nUser: ${message}`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    return res.status(200).json({
      success: true,
      message: "Chatbot response",
      response: reply,
    });

  } catch (err) {
    console.error("Gemini Error:", err); // 🔴 IMPORTANT
    return res.status(500).json({
      success: false,
      message: "Error in chatbot controller",
      error: err.message,
    });
  }
};
