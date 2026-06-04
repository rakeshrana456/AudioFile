import Image from "next/image";

export default function Zx() {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] rounded-lg overflow-hidden">
          <Image
            src="/ZX/zx.jpg"
            alt="ZX7 Speaker"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute left-6 sm:left-10 md:left-16 lg:left-24 top-1/2 -translate-y-1/2">
            <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold text-black tracking-wide">
              ZX7 SPEAKER
            </h2>

            <button className="cursor-pointer mt-4 md:mt-8 px-6 md:px-8 py-3 border border-black text-xs font-semibold tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}