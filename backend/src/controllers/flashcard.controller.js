import { asyncHandler } from "../utils/asyncHandler.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const response = await AI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  console.log(response.text);
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };
