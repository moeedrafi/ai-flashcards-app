import { toast } from "react-toastify";
import { apiClient, apiFileClient } from "@/utils/api";
import {
  Deck,
  Flashcard,
  DeckResponse,
  CreateFlashcardDeckSchema,
  createFlashcardDeckSchema,
  DecksResponse,
  GetFlashcardsResponse,
} from "@/features/flashcards/types/index";

export const createFlashcardsService = async (
  data: CreateFlashcardDeckSchema
): Promise<{ deck: Deck; flashcards: Flashcard[] } | undefined> => {
  const validatedFields = createFlashcardDeckSchema.safeParse(data);
  if (!validatedFields.success) {
    toast.error("Please fix validation errors before submitting.");
    return;
  }

  const { description, file, title } = validatedFields.data;

  try {
    const deck = await apiClient<
      { title: string; description: string },
      DeckResponse
    >("/api/v1/deck/create", "POST", { title, description });

    const deckId = deck?.data?._id;
    if (!deckId) {
      toast.error("Failed to create deck");
      return;
    }

    const formData = new FormData();
    formData.append("deckId", deckId);
    formData.append("file", file);

    const flashcards = await apiFileClient(
      "/api/v1/flashcards/generate",
      formData
    );

    return { deck: deck.data, flashcards: flashcards.data as Flashcard[] };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDecks = async () => {
  try {
    return await apiClient<unknown, DecksResponse>(
      "/api/v1/deck",
      "GET",
      undefined,
      { showSuccessToast: false, showErrorToast: false }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFlashcards = async (deckId: string) => {
  try {
    return await apiClient<unknown, GetFlashcardsResponse>(
      `/api/v1/flashcards/${deckId}`,
      "GET",
      undefined,
      { showSuccessToast: false, showErrorToast: false }
    );
  } catch (error) {
    console.log(error);
  }
};
