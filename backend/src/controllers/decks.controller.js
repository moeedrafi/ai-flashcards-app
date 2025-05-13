import { Deck } from "../models/decks.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getDeck = asyncHandler(async (req, res) => {});

const createDeck = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { title, description } = req.body;
  if (!title || !description) {
    throw new ApiError(401, "Invalid Refresh Token");
  }

  const deck = await Deck.create({ title, description, userId });

  return res.status(200).json(new ApiResponse(200, deck, "Created Deck"));
});

const deleteDeck = asyncHandler(async (req, res) => {});

const viewSharedDeck = asyncHandler(async (req, res) => {});

const toggleShare = asyncHandler(async (req, res) => {});

export { getDeck, deleteDeck, toggleShare, viewSharedDeck, createDeck };
