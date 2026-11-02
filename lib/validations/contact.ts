import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot exceed 50 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

