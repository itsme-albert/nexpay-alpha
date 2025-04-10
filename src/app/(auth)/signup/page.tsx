"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FacebookIcon, Lock, MailIcon, Phone, UserIcon } from "lucide-react";
import { useSignUpHook } from "@/hooks/useSignup";
import { toast } from "sonner";

const Page = () => {
  const { form, onSubmit, isPending } = useSignUpHook();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-1/4 min-w-max m-auto px-[5vw] bg-gray-200 rounded-xl">
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
            className="flex flex-col space-y-2"
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
                name="password"
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
                type="submit"
                className="bg-blue-100 text-blue-800 text-xl font-bold rounded-4xl w-full cursor-pointer hover:bg-blue-800 hover:text-blue-100"
                disabled={isPending}
              >
                {!isPending ? "Register" : "Loading..."}
              </Button>
            </div>
            <div className="flex gap-2 mt-2 self-center items-center">
              <p className="text-sm">Already have an account?</p>
              <Link href="/signin" className="link">
                Sign In Instead
              </Link>
            </div>
            <hr style={{ color: "gray", backgroundColor: "gray", height: 2 }} />
            <div className="flex flex-col space-y-2 mb-5 mt-1 pb-5">
              <Button type="button" className="button-social">
                <FacebookIcon></FacebookIcon>Sign In with Facebook
              </Button>
              <Button type="button" className="button-social">
                <MailIcon></MailIcon>Sign In with Google
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
