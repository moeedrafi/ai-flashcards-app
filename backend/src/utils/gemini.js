import { GoogleGenAI } from "@google/genai";

export const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
