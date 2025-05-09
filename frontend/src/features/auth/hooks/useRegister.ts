import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerService } from "@/features/auth/services/authService";
import { RegisterSchema, registerSchema } from "@/features/auth/types/index";

export const useRegister = () => {
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
    await registerService(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    errors,
  };
};
