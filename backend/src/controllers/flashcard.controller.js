import fs from "fs";
import { AI } from "../utils/gemini.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const filePath = req.file?.path;
  if (!filePath) {
    throw new ApiError(400, "File is missing");
  }

  const buffer = fs.readFileSync(filePath);

  return res.status(201).json(new ApiResponse(200, {}, "AI WORKING"));
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };

// const response = await AI.models.generateContent({
//   model: "gemini-2.0-flash",
//   contents: prompt,
// });
