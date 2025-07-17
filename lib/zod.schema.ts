import { z } from "zod";

export const skills = [
  "companionship",
  "reading",
  "errands",
  "meal_preparation",
  "mobility_support",
  "housekeeping",
  "medical_escort",
  "pet_care",
  "gardening",
  "tech_support",
  "exercise_support",
  "medication_reminder",
] as const;

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  age: z.string().min(1, { message: "Age required" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 9 digits long." })
    .regex(/^\+?[0-9\s\-]+$/, {
      message:
        "Phone number can only contain numbers, spaces, dashes, or '+' sign.",
    }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long." }),
  city: z
    .string()
    .min(3, { message: "City name must be at least 3 characters long." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "City name can only contain letters and spaces.",
    }),
  country: z
    .string()
    .min(3, { message: "Country name must be at least 3 characters long." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Country name can only contain letters and spaces.",
    }),
  // skills: z.enum(skills, { message: "At least one skill is required" }),
  // availability
});
