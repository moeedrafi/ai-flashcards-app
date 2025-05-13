import mongoose, { Schema } from "mongoose";

const deckSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    isPublic: { type: Boolean, default: false },
    shareId: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);

export const Deck = mongoose.model("Deck", deckSchema);
