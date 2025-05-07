import { GoogleGenAI } from "@google/genai";

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateText = async () => {
  const response = await AI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "How does AI work?",
  });
  console.log(response.text);
};
