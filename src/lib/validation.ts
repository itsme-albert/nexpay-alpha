import { z } from "zod";

export const name = z.string().min(1, { message: "Required Field" });
export const email = z.string().email();
export const phoneNumber = z.string().min(11, { message: "Invalid Phone #" });
export const pin = z
  .string()
  .regex(new RegExp("^\\d+$"), "PIN must be numbers")
  .min(4, { message: "PIN must contain 4 numbers" })
  .trim();
