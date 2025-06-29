import { extractChunks } from "../utils/pdf.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateFlashcards } from "../utils/gemini.js";
import { Flashcard } from "../models/flashcard.models.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const getFlashcards = asyncHandler(async (req, res) => {
  const { deckId } = req.params;
  if (!deckId) {
    throw new ApiError(400, "Deck is missing");
  }

  const flashcards = await Flashcard.find({ deckId });

  return res
    .status(201)
    .json(new ApiResponse(200, flashcards, "Flashcards Fetched"));
});

const createFlashcard = asyncHandler(async (req, res) => {
  const pdfBuffer = req.file?.buffer;
  const deckId = req.body.deckId;

  if (!pdfBuffer) throw new ApiError(400, "File is missing");
  if (!deckId) throw new ApiError(400, "Couldn't find deck");

  try {
    const chunks = await extractChunks(pdfBuffer);
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
  }
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard, getFlashcards };
