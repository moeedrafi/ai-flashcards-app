import { toast } from "react-toastify";
import { apiClient } from "@/utils/api";
import {
  Response,
  LoginSchema,
  registerSchema,
  RegisterSchema,
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

export const loginService = async (data: LoginSchema) => {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) {
    toast.error("Please fix validation errors before submitting.");
    return;
  }

  try {
    await apiClient<LoginSchema, Response>(
      "/api/v1/users/login",
      "POST",
      validatedFields.data
    );
  } catch (error) {
    console.log(error);
  }
};
