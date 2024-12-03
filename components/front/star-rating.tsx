"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviews: number;
}

export function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} Rating ({reviews} reviews)
      </span>
    </div>
  );
}
