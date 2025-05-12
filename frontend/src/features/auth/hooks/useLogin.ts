import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginService } from "@/features/auth/services/authService";
import { loginSchema, LoginSchema } from "@/features/auth/types/index";
import { useAuth } from "@/context/AuthContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginSchema) => {
    const response = await loginService(data);
    if (!response?.data) return;

    setIsLoggedIn(true);
    setUser(response.data);

    navigate("/flashcards");
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
  };
};
