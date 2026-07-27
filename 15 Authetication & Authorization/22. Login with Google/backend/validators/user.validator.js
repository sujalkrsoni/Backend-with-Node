import { z } from "zod";

export const registerValidator = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address." }),

 password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters." })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    {
      message:
        "Password must contain an uppercase letter, a lowercase letter, a number, and a special character.",
    }
  )
});