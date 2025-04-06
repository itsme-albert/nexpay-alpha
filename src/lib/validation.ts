import { z } from "zod";

export const name = z.string().min(1, { message: "Required Field" });
export const email = z.string().email();
export const phoneNumber = z.string().min(11, { message: "Invalid Phone #" });
export const pin = z
  .string()
  .length(4, "Pin must be exactly 4 digits")
  .regex(/^\d+$/, "Pin must be numeric")
  .trim();
