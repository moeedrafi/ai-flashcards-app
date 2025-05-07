import { AI } from "../utils/gemini.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const response = await AI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, response.text, "AI WORKING"));
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };
