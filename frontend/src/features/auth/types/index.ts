import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be of 8 letters"),
});
export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be of 8 letters"),
});
export type LoginSchema = z.infer<typeof loginSchema>;

type User = {
  _id: string;
  email: string;
};

export type Response = {
  message: string;
  data: User;
};
