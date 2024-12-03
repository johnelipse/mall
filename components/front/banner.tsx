/* eslint-disable @next/next/no-img-element */
export function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#8B1818] to-[#C06363] rounded-lg overflow-hidden">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-2">
            GET 10% CASEBACK ON SHOPPING $150
          </h2>
          <p className="text-peach-100 text-white mb-4 opacity-80">
            Shopping is a bit of relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <button className="px-6 py-2 bg-[#FFD700] text-[#8B1818] rounded-full font-medium hover:bg-yellow-400 transition-colors">
            Learn More
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="/seeds.png"
            alt="Various grains and seeds in wooden scoops"
            className="h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
