import Image from "next/image";
import { HeadPhoneType } from "@/app/Types/types";

interface HeroProps {
  item: HeadPhoneType;
}
export default function HeadPhoneHero({ item }: HeroProps) {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-between min-h-[596px] ">
        <div className="relative w-[615px] h-[638px] rounded-xl bg-gray-300 overflow-hidden group">
          <Image
            src={item?.image?.src}
            alt={item.image.alt}
            fill
            className="cursor-pointer object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
        <div className="max-w-[400px]">
          <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase mb-6">
            {item.tag}
          </p>

          <h1 className="text-black text-[56px] leading-[58px] font-bold uppercase">
            {item.title}
          </h1>

          <p className="text-black text-[15px] leading-[25px] mt-6 mb-10">
            {item.description}
          </p>

          <button className="bg-[#D87D4A] text-white px-8 py-4">
            {item.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}