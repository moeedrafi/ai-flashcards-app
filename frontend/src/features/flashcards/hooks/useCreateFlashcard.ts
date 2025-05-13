import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFlashcardSchema, CreateFlashcardSchema } from "../types";
import { createFlashcardsService } from "../service/flashcardService";

export const useCreateFlashcard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateFlashcardSchema>({
    defaultValues: { title: "", description: "" },
    resolver: zodResolver(createFlashcardSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CreateFlashcardSchema) => {
    const response = await createFlashcardsService(data);
    if (!response?.data) return;
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
  };
};
