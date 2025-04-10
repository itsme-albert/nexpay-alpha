import React from "react";
import { ClipboardList, HomeIcon, UserIcon, WalletIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="px-8">
      <div className="bg-white rounded-xl py-2 px-0 w-full">
        <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <HomeIcon size={42}></HomeIcon>
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <Badge
              variant={"outline"}
              className="rounded-full border-2 border-red-500 text-red-500 font-bold text-xs px-1 py-0 absolute top-0 right-2 -mt-2"
            >
              1
            </Badge>
            <ClipboardList size={42}></ClipboardList>
            <span className="text-xs">Transaction</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <WalletIcon size={42}></WalletIcon>
            <span className="text-xs">Wallet</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <UserIcon size={42}></UserIcon>
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
