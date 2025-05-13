import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/context/AuthContext";
import { registerService } from "@/features/auth/services/authService";
import { RegisterSchema, registerSchema } from "@/features/auth/types/index";

export const useRegister = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterSchema) => {
    const response = await registerService(data);
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
