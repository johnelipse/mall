/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

interface CategoryButtonProps {
  icon: string;
  label: string;
}

export function CategoryButton({ icon, label }: CategoryButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex justify-between items-center bg-[#e1e8eeff] rounded gap-2 p-3"
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={icon} alt="" className="w-6 h-6" />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </motion.button>
  );
}
