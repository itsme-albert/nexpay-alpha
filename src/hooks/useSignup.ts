"use client";

import { z } from "zod";
import { email, name, phoneNumber, pin } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupUser } from "@/app/(auth)/signup/actions";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const signupSchema = z.object({
  firstName: name,
  lastName: name,
  phoneNumber: phoneNumber,
  email: email,
  password: pin,
});

export type SignupFormValue = z.infer<typeof signupSchema>;

export function useSignUpHook() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignupFormValue>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupFormValue) => {
    console.log(data);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("password", data.password);

    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const result = await signupUser(formData);

        if (result.success) {
          setSuccess("Signup successful!");
          setError(null);
          toast.success("Signup Successful");
        } else {
          setError(result.error || "Failed to create an account.");
          toast.error(result.error || "Failed to create an account.");
        }
      } catch {
        setError("An error has occurred during signup.");
        toast;
      }
    });
  };

  return { form, onSubmit, isPending, success, error };
}
