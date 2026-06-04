import Image from "next/image";
import { HeadPhoneType } from "@/app/Types/types";

interface HeroProps {
  item: HeadPhoneType;
}
export default function HeadPhoneHero({ item }: HeroProps) {
  return (
    <section className="py-10 md:py-20 bg-[#FFFFFF] px-4 md:px-0">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-h-full lg:max-h-[596px]">
        <div className="relative w-full lg:w-[615px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[638px] rounded-xl bg-gray-300 overflow-hidden group">
          <Image
            src={item?.image?.src}
            alt={item.image.alt}
            fill
            className="cursor-pointer object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
        <div className="max-w-[400px] text-center lg:text-left px-4 lg:px-0">
          {item?.TagSHow&& <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase mb-6">
            {item.tag}
          </p>}

          <h1 className="text-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight sm:leading-[50px] md:leading-[55px] lg:leading-[58px] font-bold uppercase">
            {item.title}
          </h1>

          <p className="text-black text-[14px] sm:text-[15px] leading-[22px] sm:leading-[25px] mt-6 mb-8 sm:mb-10 px-2 sm:px-0">
            {item.description}
          </p>

          <button className="bg-[#D87D4A] cursor-pointer  text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#D87D4A]/80 transition-colors">
            {item.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}