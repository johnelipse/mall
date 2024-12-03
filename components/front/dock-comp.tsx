/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Search, ShoppingBag, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: ShoppingBag, label: "Cart" },
  { icon: User, label: "Profile" },
];

export function MobileDock() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="fixed bottom-3 left-2 right-2 z-50 sm:hidden">
      <nav className="bg-[#e5e9ffff] rounded-lg   px-4 py-1">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className="flex flex-col items-center justify-center w-16 h-16 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
                {/* {activeItem === item.label && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                    layoutId="underline"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )} */}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
