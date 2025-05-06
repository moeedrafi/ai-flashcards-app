import mongoose, { Schema } from "mongoose";

const flashcardSchema = new Schema(
  {
    deckId: {
      type: Schema.Types.ObjectId,
      ref: "Deck",
      required: true,
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createdByAI: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Flashcard = mongoose.model("Flashcard", flashcardSchema);
