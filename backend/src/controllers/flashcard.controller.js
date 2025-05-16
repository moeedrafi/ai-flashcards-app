import fs from "fs";

import { extractChunks } from "../utils/pdf.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateFlashcards } from "../utils/gemini.js";
import { Flashcard } from "../models/flashcard.models.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const filePath = req.file?.path;
  const deckId = req.body.deckId;
  if (!filePath) {
    throw new ApiError(400, "File is missing");
  }
  if (!deckId) {
    throw new ApiError(400, "Couldn't find deck");
  }

  try {
    const chunks = await extractChunks(filePath);
    const flashcards = await generateFlashcards(chunks);
    const flashcardToInsert = flashcards.flashcards.map((card) => ({
      deckId,
      question: card.front,
      answer: card.back,
    }));

    const savedFlashcards = await Flashcard.insertMany(flashcardToInsert);

    return res
      .status(201)
      .json(new ApiResponse(200, savedFlashcards, "AI WORKING"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while processing the file");
  } finally {
    fs.unlinkSync(filePath);
  }
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };
