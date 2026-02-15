import z, { email, string } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  Password: z.string().min(6, "atelast 6 chars"),
});

// export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password required"),
});
