"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Session } from "next-auth";
import { UserMenu } from "./user-menu";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header({ session }: { session?: Session | null }) {
  return (
    <header className="sticky hidden md:block top-2 z-50 bg-[#064c4f] rounded-md border-b">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2">
            <Menu className="h-6 w-6 text-white" />
          </button>
          <span className="font-semibold text-lg text-white">Gramose</span>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search for grocery items or products"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white rounded-full relative"
          >
            <span className="bg-red-500 rounded-full w-6 h-6 -top-2 -right-2 absolute">
              2
            </span>
            <ShoppingCart className="h-6 w-6" />
          </motion.button>
          <motion.div whileTap={{ scale: 0.95 }} className="p-2">
            {/* <User className="h-6 w-6 text-white" /> */}
            {session ? (
              <UserMenu
                username={session?.user.name}
                avatarUrl={session?.user.image}
              />
            ) : (
              <Link href="/login">
                <Button asChild>signIn</Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
