import Image from "next/image";
import { Item } from "@/app/Types/types";
interface HeroProps {
  item: Item;
}
export default function Hero({ item }: HeroProps) {
  return (
    <section className="bg-[#191919]">
      <div className="container min-h-[632px] flex items-center justify-between">
        <div className="max-w-[400px]">
          <p className="text-white/50 text-sm tracking-[10px] uppercase mb-6">
            {item.tag}
          </p>

          <h1 className="text-white text-[56px] leading-[58px] font-bold uppercase">
            {item.title}
          </h1>

          <p className="text-white/75 text-[15px] leading-[25px] mt-6 mb-10">
            {item.description}
          </p>

          <button className="bg-[#D87D4A] text-white px-8 py-4">
            {item.buttonText}
          </button>
        </div>

        <div className="relative w-[700px] h-[632px]">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}