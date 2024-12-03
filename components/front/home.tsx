/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CategoryButton } from "./category-button";
import { ProductCard } from "./product-card";

export const products = [
  {
    name: "Beetroot (Local shop)",
    quantity: "500 gm",
    price: 17.29,
    image: "https://shorturl.at/tAV3O",
  },
  {
    name: "Italian Avocado (Local shop)",
    quantity: "1 pc",
    price: 12.29,
    image: "https://shorturl.at/6YnFt",
  },
  {
    name: "Grain germ (Process food)",
    quantity: "200 gm",
    price: 14.29,
    image: "https://shorturl.at/lIIfk",
  },
  {
    name: "Beef Mixed (Cut Store)",
    quantity: "1 kg",
    price: 16.29,
    image: "https://shorturl.at/LDdid",
  },
  {
    name: "Cold drinks (Sprite)",
    quantity: "500 ml",
    price: 18.29,
    image: "https://shorturl.at/5HhME",
  },
];
export default function Home() {
  const categories = [
    { icon: "https://t.ly/eDmO3", label: "Vegetable" },
    { icon: "https://t.ly/q9nR6", label: "Snacks & Sweets" },
    { icon: "https://t.ly/9wP8C", label: "Fruits" },
    { icon: "https://t.ly/RyFZ1", label: "Chicken/eggs" },
    { icon: "https://t.ly/j8YKq", label: "Milk & Dairy" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#004d3f] border-radius text-white mt-8"
        >
          <div className="container mx-auto px-4 py-9 flex items-center">
            <div className="flex-1">
              <motion.h1
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="text-4xl font-bold mb-4"
              >
                We bring the store
                <br />
                to your door
              </motion.h1>
              <p className="text-gray-200 mb-6">
                Get organic produce and sustainably sourced groceries delivered
                at up to 40% off grocery
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00b67a] text-white px-6 py-2 rounded-full font-medium"
              >
                Shop now
              </motion.button>
            </div>
            <div className="flex-1 flex justify-end">
              <img src="/shop.png" alt="" className="w-64  h-full" />
            </div>
          </div>
        </motion.section>

        {/* Categories */}
        <section className="py-8 mt-8 overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="flex justify-between">
              {categories.map((category, index) => (
                <CategoryButton key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">You might need</h2>
              <button className="text-[#00b67a] flex items-center gap-1">
                See more
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
