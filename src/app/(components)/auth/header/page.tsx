import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-between items-center pt-6 px-4">
      <div className="profile">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center cursor-pointer">
            <Image
              src="/logo.png"
              height={0}
              width={40}
              priority={true}
              alt="Logo"
              className="self-center rounded-full"
            />
            <span className="text-base">Christine</span>
            <ChevronDownIcon className="text-xs"></ChevronDownIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="settings">
        <Link
          href="/settings"
          className="text-blue-900 border-0 shadow-none cursor-pointer flex justify-center"
        >
          <SettingsIcon size={28}></SettingsIcon>
        </Link>
      </div>
    </div>
  );
};

export default Page;
