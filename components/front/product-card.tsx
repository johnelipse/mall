/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  quantity: string;
  price: number;
  image: string;
}

export function ProductCard({
  name,
  quantity,
  price,
  image,
}: ProductCardProps) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-lg"
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg mb-3">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="text-center">
        <div className="space-y-1 mb-3">
          <h3 className="font-medium text-sm text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{quantity}</p>
        </div>
        <div className="flex items-baseline justify-center gap-0.5">
          <span className="text-lg font-semibold">{Math.floor(price)}</span>
          <span className="text-sm font-medium">
            .{((price % 1) * 100).toFixed(0)}
          </span>
          <span className="text-sm font-medium">$</span>
        </div>
      </div>
      <div className="">
        {count === 0 ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(1)}
            className="h-8 w-full mt-2 rounded-lg border border-gray-200 flex items-center justify-center"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </motion.button>
        ) : (
          <div className="flex rounded-lg border justify-between border-gray-200 items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCount(count - 1)}
              className="h-8 w-8  flex items-center justify-center"
            >
              <Minus className="h-4 w-4" />
            </motion.button>
            <span className="w-4 text-center">{count}</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCount(count + 1)}
              className="h-8 w-8 flex items-center justify-center"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
