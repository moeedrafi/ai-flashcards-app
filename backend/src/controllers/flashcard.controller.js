import fs from "fs";

import { extractChunks } from "../utils/pdf.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateFlashcards } from "../utils/gemini.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const filePath = req.file?.path;
  if (!filePath) {
    throw new ApiError(400, "File is missing");
  }

  try {
    const chunks = await extractChunks(filePath);
    const flashcards = await generateFlashcards(chunks);
    console.log(flashcards.flashcards);

    return res
      .status(201)
      .json(new ApiResponse(200, flashcards.flashcards, "AI WORKING"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while processing the file");
  } finally {
    fs.unlinkSync(filePath);
  }
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };
