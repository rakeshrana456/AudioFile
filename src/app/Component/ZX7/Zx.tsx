import Image from "next/image";
export default function Zx() {
  return (
    <section >
       <div className="container py-10 ">
  <div className="relative h-[320px] rounded-lg overflow-hidden">
    <Image
      src="/ZX/zx.jpg"
      alt="ZX7 Speaker"
      height={420}
      width={640}
      className="w-full h-full object-cover"
    />

    <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2">
      <h2 className="text-[28px] md:text-[32px] font-bold text-black tracking-wide">
        ZX7 SPEAKER
      </h2>

      <button className="mt-8 px-8 py-3 border border-black text-xs font-semibold tracking-wider bg-black transition-all duration-300">
        SEE PRODUCT
      </button>
    </div>
  </div>
</div>
    </section>
  );
}