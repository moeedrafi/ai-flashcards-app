import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createFlashcardSchema,
  CreateFlashcardSchema,
} from "@/features/flashcards/types/index";
import { createFlashcardsService } from "@/features/flashcards/service/flashcardService";

export const useCreateFlashcard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateFlashcardSchema>({
    defaultValues: { title: "", description: "" },
    resolver: zodResolver(createFlashcardSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CreateFlashcardSchema) => {
    const response = await createFlashcardsService(data);
    console.log(response);
    if (!response?.data) return;
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
    setValue,
  };
};
