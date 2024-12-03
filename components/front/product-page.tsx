/* eslint-disable @next/next/no-img-element */
import { Heart, ArrowRight, Package, Gift, ChevronRight } from "lucide-react";
import { ProductGallery } from "./product-gallary";
import { StarRating } from "./star-rating";
import { ProductCard } from "./product-card";

const productImages = Array(5).fill("https://shorturl.at/kQT0c");

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

export default function ProductPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <ProductGallery images={productImages} />
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {/* Category */}
              <div className="text-sm text-gray-500">Bevmo grocery</div>

              {/* Title */}
              <h1 className="text-3xl font-bold">
                Bobs red mill whole wheat organic flour
              </h1>

              {/* Rating */}
              <StarRating rating={4.5} reviews={16} />

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">29</span>
                <span className="text-xl font-bold">.12$</span>
              </div>

              {/* Klarna */}
              <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm">
                <img src="/klarna.svg" alt="Klarna" className="h-4" />
                Split in to 3 interest-free payments 11.05
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Add to bucket
                </button>
                <button className="flex-1 bg-green-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition-colors">
                  Buy now
                </button>
              </div>

              {/* Wishlist & Compare */}
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Heart className="w-5 h-5" />
                  ADD TO WISHLIST
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ArrowRight className="w-5 h-5" />
                  Compare with other vendor
                </button>
              </div>

              {/* Color Variants */}
              {/* <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 ring-2 ring-offset-2 ring-purple-600" />
                <div className="w-8 h-8 rounded-full bg-orange-500" />
                <div className="w-8 h-8 rounded-full bg-blue-600" />
              </div> */}

              {/* Product Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <p>SKU: MB3442</p>
                <p>Categories: Fruits, Noodles, Juice, snacks, Tablets</p>
                <p>
                  Coconut Oil is a great baking substitute when cooking or
                  baking. Coconut Oil is naturally rich source of medium chain
                  triglycerides
                </p>
              </div>

              {/* Stock Info */}
              <div className="text-red-500 text-sm flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full" />
                100 sold in last 35 hour
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <Package className="w-10 h-10 text-blue-600" />
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-gray-600">
                      Apply To All Order Over $100
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-10 h-10 text-blue-600" />
                  <div>
                    <p className="font-medium">Great Daily Deal</p>
                    <p className="text-sm text-gray-600">
                      We Providing Organic Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
