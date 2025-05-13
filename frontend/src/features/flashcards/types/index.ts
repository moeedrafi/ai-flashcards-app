import { z } from "zod";

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

export type GetResponse = {
  message: string;
  data: Deck[];
  statusCode: number;
};

export type PostResponse = {
  message: string;
  data: Deck;
  statusCode: number;
};
