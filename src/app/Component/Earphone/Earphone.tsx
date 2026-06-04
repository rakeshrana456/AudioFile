import Image from "next/image";

export default function Earphone() {
  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Image Section */}
          <div className="overflow-hidden rounded-lg group">
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px]">
              <Image
                src="/Earphone/earphone.png"
                alt="YX1 Earphones"
                fill
                className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-gray-300 rounded-lg flex flex-col items-center md:items-start justify-center px-8 py-12 md:px-12">
            <h2 className="text-2xl md:text-3xl text-black font-bold uppercase mb-8 text-center md:text-left">
              YX1 Earphones
            </h2>

            <button className=" cursor-pointer border border-black text-black px-6 py-3 text-sm font-semibold uppercase hover:bg-black hover:text-white transition-all duration-300">
              See Product
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}