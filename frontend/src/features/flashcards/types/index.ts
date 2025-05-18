import { z } from "zod";
import { ApiResponse } from "@/utils/types";

export const createFlashcardDeckSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  file: z.instanceof(File),
});
export type CreateFlashcardDeckSchema = z.infer<
  typeof createFlashcardDeckSchema
>;

export interface Flashcard {
  _id: string;
  deckId: string;
  question: string;
  answer: string;
  createdByAI?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type Deck = {
  _id: string;
  title: string;
  description: string;
  userId: string;
  isPublic: boolean;
  shareId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DeckResponse = ApiResponse<Deck>;
export type DecksResponse = ApiResponse<Deck[]>;
export type FlashcardsResponse = ApiResponse<{
  deck: Deck;
  flashcards: Flashcard[];
}>;
export type GetFlashcardsResponse = ApiResponse<Flashcard[]>;
