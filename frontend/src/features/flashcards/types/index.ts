import { z } from "zod";
import { ApiResponse } from "@/utils/types";

export const createFlashcardSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  file: z.instanceof(File),
});
export type CreateFlashcardSchema = z.infer<typeof createFlashcardSchema>;

export type Flashcard = {
  front: string;
  back: string;
};

export type Deck = {
  _id: string;
  title: string;
  description: string;
};

export type DeckResponse = ApiResponse<Deck>;
export type DecksResponse = ApiResponse<Deck[]>;
export type FlashcardsResponse = ApiResponse<Flashcard[]>;
