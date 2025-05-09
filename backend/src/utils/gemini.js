import { GoogleGenAI } from "@google/genai";

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateFlashcards = async (chunks) => {
  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: chunks.map((chunk) => ({ text: chunk.pageContent })),
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const generatedText = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleanedText = generatedText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  } catch (error) {
    console.log("Failed to generate Flashcards");
    throw error;
  }
};
