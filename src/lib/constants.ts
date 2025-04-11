import { z } from "zod";

export const name = z.string().min(1, { message: "Required Field" });
export const email = z.string().email();
export const phoneNumber = z
  .string()
  .regex(/^\+?[0-9]{7,15}$/, { message: "Invalid phone #" });
export const pin = z
  .string()
  .length(4, "Pin must be exactly 4 digits")
  .regex(/^\d+$/, "Pin must be numeric")
  .trim();
