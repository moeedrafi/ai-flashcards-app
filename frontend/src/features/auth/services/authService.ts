import { toast } from "react-toastify";
import { apiClient } from "@/utils/api";
import {
  registerSchema,
  RegisterSchema,
  Response,
} from "@/features/auth/types/index";

export const registerService = async (data: RegisterSchema) => {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) {
    toast.error("Please fix validation errors before submitting.");
    return;
  }

  try {
    await apiClient<RegisterSchema, Response>(
      "/api/v1/users/register",
      "POST",
      validatedFields.data
    );
  } catch (error) {
    console.log(error);
  }
};
