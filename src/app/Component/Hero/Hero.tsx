import Image from "next/image";
import { Item } from "@/app/Types/types";

interface HeroProps {
  item: Item;
}

export default function Hero({ item }: HeroProps) {
  return (
    <section className={`${item.bgColor}`}>
      <div className="container mx-auto min-h-158 flex flex-col lg:flex-row items-center justify-between py-8 md:py-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <div className={`${item?.imageBackGround} relative w-full lg:w-[591px] h-[300px] lg:h-[613px] overflow-hidden mt-8 lg:mt-0 rounded-xl order-1 lg:order-2 group`}>
          <Image
            src={item?.image?.src}
            alt={item?.image?.alt}
            fill
            className=" cursor-pointer object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          />
        </div>


        <div className="max-w-100 text-center lg:text-left order-2 lg:order-1">
          {item?.Show && (
            <p className="text-white/50 text-sm tracking-[10px] uppercase mb-6">
              {item.tag}
            </p>
          )}
          <h1 className={`${item?.textColor} text-4xl lg:text-[56px] leading-tight lg:leading-14.5 font-bold uppercase`}>
            {item.title}
          </h1>

          <p className={`${item?.ParagraphColor} text-[15px] leading-6.25 mt-6 mb-10 px-2 lg:px-0`}>
            {item.description}
          </p>

          <button className="cursor-pointer bg-[#D87D4A] text-white px-8 py-4 hover:bg-[#D87D4A]/80 transition-colors">
            {item.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}