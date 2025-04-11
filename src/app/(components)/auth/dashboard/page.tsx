import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRightLeft,
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  HandCoins,
  PhilippinePesoIcon,
  SendIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="balance">
        <Card className="gap-1">
          <CardHeader>
            <CardTitle>
              <p className="text-xs text-blue-900">Current Balance</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-1 items-baseline">
            <PhilippinePesoIcon
              size={42}
              className="font-bold"
            ></PhilippinePesoIcon>
            <p className="text-xl font-black">10,000.00</p>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-blue-900 ms-5">****9999</p>
          </CardFooter>
        </Card>
      </div>

      <div className="transaction flex flex-col mt-3">
        <div className="flex justify-evenly items-center bg-white rounded-xl p-1 mx-5">
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <BanknoteArrowUpIcon size={52}></BanknoteArrowUpIcon>
            </Link>
            <span>Deposit</span>
          </div>
          <span className="text-2xl">|</span>
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <BanknoteArrowDownIcon size={52}></BanknoteArrowDownIcon>
            </Link>
            <span>Withdraw</span>
          </div>
          <span className="text-2xl">|</span>
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <ArrowRightLeft size={52}></ArrowRightLeft>
            </Link>
            <span>Transfer</span>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center p-1 my-10">
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <SendIcon size={72}></SendIcon>
            </Link>
            <span>Send</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <HandCoins size={72}></HandCoins>
            </Link>
            <span>Request</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <Zap size={72}></Zap>
            </Link>
            <span>Pay Bills</span>
          </div>
        </div>
      </div>

      <div className="history">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <p className="text-base text-blue-800 font-bold">
                Recent Transaction
              </p>
              <Link
                href="/"
                className="rounded-xl bg-blue-100 text-blue-800 px-3 py-1"
              >
                View All
              </Link>
            </CardTitle>
            <CardContent className="p-1 space-y-4">
              <div className="flex justify-between gap-2">
                <div className="rounded-xl bg-blue-100 p-2">
                  <SendIcon size={56}></SendIcon>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-base">Send-money</p>
                  <p className="text-xs">17 Sept 2025 11:20 AM</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex items-baseline">
                    <PhilippinePesoIcon size={24}></PhilippinePesoIcon>
                    <p className="font-bold text-base text-blue-800">
                      1,000.00
                    </p>
                  </div>
                  <div className="rounded p-1 text-blue-800 text-xs">
                    Confirmed
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="rounded-xl bg-blue-100 p-2">
                  <SendIcon size={56}></SendIcon>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-base">Send-money</p>
                  <p className="text-xs">17 Sept 2025 11:20 AM</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex items-baseline">
                    <PhilippinePesoIcon size={24}></PhilippinePesoIcon>
                    <p className="font-bold text-base text-blue-800">
                      1,000.00
                    </p>
                  </div>
                  <div className="rounded p-1 text-blue-800 text-xs">
                    Confirmed
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Page;
