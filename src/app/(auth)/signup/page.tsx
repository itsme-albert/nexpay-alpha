"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { email, name, phoneNumber, pin } from "@/lib/validation";
import { Lock, MailIcon, Phone, UserIcon } from "lucide-react";
import Image from "next/image";

const signupSchema = z.object({
  firstName: name,
  lastName: name,
  phoneNumber: phoneNumber,
  email: email,
  pin: pin,
});

const Page = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      pin: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log(values);
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-1/2 min-w-max m-auto px-[5vw] py-10 bg-gray-200 rounded-xl">
        <Image
          src="/nexpayfinal.png"
          height={0}
          width={200}
          priority={true}
          alt="Logo"
          className="self-center"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 p-5"
          >
            <div className="relative">
              <UserIcon className="icon" />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="text-end">
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage className="text-xs me-5 -mt-8" />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative">
              <UserIcon className="icon" />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="text-end">
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage className="text-xs me-5 -mt-8" />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative">
              <MailIcon className="icon" />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-end">
                    <FormControl>
                      <Input placeholder="Email" {...field} className="input" />
                    </FormControl>
                    <FormMessage className="text-xs me-5 -mt-8" />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative">
              <Phone className="icon" />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="text-end">
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage className="text-xs me-5 -mt-8" />
                  </FormItem>
                )}
              />
            </div>
            <div className="relative">
              <Lock className="icon h-3 w-3" />
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="4-digit Pin code"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-center" />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-5">
              <Button
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-blue-100 text-blue-800 text-xl font-bold rounded-4xl w-full cursor-pointer hover:bg-blue-800 hover:text-blue-100"
              >
                Register
              </Button>
            </div>
            <div className="flex gap-5 mt-5 self-center">
              <Link href="/signup" className="underline text-sm">
                Create Account
              </Link>
              <Link href="/signup" className="underline text-sm">
                Sign In Instead
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
