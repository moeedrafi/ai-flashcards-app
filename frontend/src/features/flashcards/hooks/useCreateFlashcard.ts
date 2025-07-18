import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateFlashcardDeckSchema,
  createFlashcardDeckSchema,
  Flashcard,
} from "@/features/flashcards/types/index";
import { createFlashcardsService } from "@/features/flashcards/service/flashcardService";
import { useDeck } from "@/context/DeckContext";

export const useCreateFlashcard = () => {
  const { setDecks } = useDeck();
  const [filename, setFilename] = useState("");
  const [flashcards, setFlashcards] = useState<Flashcard[]>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<CreateFlashcardDeckSchema>({
    defaultValues: { title: "", description: "" },
    resolver: zodResolver(createFlashcardDeckSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CreateFlashcardDeckSchema) => {
    const response = await createFlashcardsService(data);
    if (!response?.deck || !response.flashcards) return;
    reset();

    setFilename("");
    setDecks((prev) => [response.deck, ...prev]);
    setFlashcards(response.flashcards);
  };

  return {
    flashcards,
    filename,
    setFilename,
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
    setValue,
  };
};
