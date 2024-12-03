"use client";

import { ChevronDown } from "lucide-react";

const filterOptions = [
  { label: "All Categories", color: "bg-emerald-700" },
  { label: "Price", color: "bg-white" },
  { label: "Review", color: "bg-white" },
  { label: "Color", color: "bg-white" },
  { label: "Material", color: "bg-white" },
  { label: "Offer", color: "bg-white" },
];

export function Filters() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-2 justify-between overflow-x-auto pb-2">
        {filterOptions.map((option, index) => (
          <button
            key={index}
            className={`px-2 py-1 rounded-full text-[0.8rem] flex items-center gap-2 ${
              option.color === "bg-emerald-700"
                ? "bg-emerald-700 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
          >
            {option.label}
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
        <button className="px-4 py-2 text-[0.8rem] rounded-full bg-white border hover:bg-gray-50 flex items-center gap-2">
          All Filters
        </button>
      </div>
      <button className="px-4 py-2 rounded-full text-[0.8rem] bg-white border hover:bg-gray-50 flex items-center gap-2">
        Sort by
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
