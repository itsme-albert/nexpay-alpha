"use server";

import supabaseServer from "@/lib/supabase/server";
import { paths } from "@/routes/paths";
import { redirect } from "next/navigation";

export async function signupUser(formData: FormData) {
  const supabase = await supabaseServer();
  console.log("SUPABASE", supabase);
  console.log("DATA", formData);
  const fname = formData.get("firstName") as string;
  const pword = formData.get("password") as string;
  const prefix = `@${fname}-${pword}`;

  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: prefix,
    options: {
      emailRedirectTo: "https://webuild-nexpay-alpha-v1.vercel.app/",
      data: {
        first_name: fname,
        last_name: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phoneNumber") as string,
        role: "user",
      },
    },
  });

  console.log("SIGN UP DATA", signupData);
  console.log("SIGN UP ERROR", signupError);

  if (signupData) {
    return { success: true, data: signupData };
  }

  if (signupError) {
    return { success: true, error: signupError.message };
  }

  redirect(paths.home);
}
