import { asyncHandler } from "../utils/asyncHandler.js";

const getDecks = asyncHandler(async (req, res) => {});

const deleteDeck = asyncHandler(async (req, res) => {});

const viewSharedDeck = asyncHandler(async (req, res) => {});

const toggleShare = asyncHandler(async (req, res) => {});

export { getDecks, deleteDeck, toggleShare, viewSharedDeck };
