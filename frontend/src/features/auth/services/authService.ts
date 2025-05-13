import { toast } from "react-toastify";
import { apiClient } from "@/utils/api";
import {
  User,
  ApiResponse,
  LoginSchema,
  registerSchema,
  RegisterSchema,
  loginSchema,
} from "@/features/auth/types/index";

export const registerService = async (data: RegisterSchema) => {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) {
    toast.error("Please fix validation errors before submitting.");
    return;
  }

  try {
    return await apiClient<RegisterSchema, ApiResponse<User>>(
      "/api/v1/users/register",
      "POST",
      validatedFields.data
    );
  } catch (error) {
    console.log(error);
  }
};

export const loginService = async (data: LoginSchema) => {
  const validatedFields = loginSchema.safeParse(data);
  if (!validatedFields.success) {
    toast.error("Please fix validation errors before submitting.");
    return;
  }

  try {
    return await apiClient<LoginSchema, ApiResponse<User>>(
      "/api/v1/users/login",
      "POST",
      validatedFields.data
    );
  } catch (error) {
    console.log(error);
  }
};

export const checkAuth = async () => {
  try {
    return await apiClient<unknown, ApiResponse<User>>(
      "/api/v1/users/check-auth",
      "GET",
      undefined,
      { showSuccessToast: false, showErrorToast: false }
    );
  } catch (error) {
    console.log(error);
  }
};
