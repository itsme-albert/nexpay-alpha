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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const otpVerification = z.object({
  otp: z.string().length(4, "OTP must be exactly 4 digits"),
});

const Page = () => {
  const [count, setCount] = useState(40);
  const [linkDisabled, setLinkDisabled] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setLinkDisabled(false);
    }
  }, [count]);

  const resetTimer = () => {
    setCount(60);
    setLinkDisabled(true);
  };

  const form = useForm<z.infer<typeof otpVerification>>({
    mode: "onChange",
    resolver: zodResolver(otpVerification),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (values: z.infer<typeof otpVerification>) => {
    console.log(values);
  };

  const handleOtpChange = (otp: string, onChange: (value: string) => void) => {
    onChange(otp);
    if (otp.length === 4) {
      form.handleSubmit(onSubmit)();
    }
  };

  const handleResendOtp = () => {
    console.log("OTP Resend");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col min-w-max m-auto p-24 bg-gray-200 rounded-xl justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center space-y-8"
          >
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <InputOTP
                  maxLength={4}
                  pattern={REGEXP_ONLY_DIGITS}
                  onChange={(otp) => handleOtpChange(otp, field.onChange)}
                >
                  <FormItem className="text-end">
                    <FormControl>
                      <InputOTPGroup
                        {...field}
                        className="flex flex-row justify-center gap-2 w-full"
                      >
                        <InputOTPSlot index={0} className="otp-slot" />
                        <InputOTPSlot index={1} className="otp-slot" />
                        <InputOTPSlot index={2} className="otp-slot" />
                        <InputOTPSlot index={3} className="otp-slot" />
                      </InputOTPGroup>
                    </FormControl>
                  </FormItem>
                </InputOTP>
              )}
            />
            {count > 0 && (
              <p className="text-base text-center text-blue-800 m-0">
                resend code in: {count} seconds
              </p>
            )}
            <Link
              href="#"
              onClick={(e) => {
                handleResendOtp();
                if (!linkDisabled) resetTimer();
              }}
              className={`text-base ${
                linkDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-800"
              } underline text-center`}
              style={{ pointerEvents: linkDisabled ? "none" : "auto" }}
            >
              Resend Code?
            </Link>
            <div className="text-lg font-bold text-blue-900 text-center">
              Verification Code
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
