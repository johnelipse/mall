import { Banner } from "./banner";
import { Filters } from "./filters";
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

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Banner />

        <div className="mt-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>Gromuse</span>
            <span>/</span>
            <span className="font-medium text-gray-900">All category</span>
          </div>

          <Filters />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
