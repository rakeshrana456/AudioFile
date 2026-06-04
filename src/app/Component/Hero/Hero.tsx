import Image from "next/image";
import { Item } from "@/app/Types/types";
interface HeroProps {
  item: Item;
}
export default function Hero({ item }: HeroProps) {
  return (
    <section className={`${item.bgColor}`}>
      <div className="container min-h-158 flex flex-col md:flex-row items-center justify-between py-8 md:py-0 px-4 md:px-0">
        <div className="max-w-100 text-center md:text-left">
          {item?.Show && <p className="text-white/50 text-sm tracking-[10px] uppercase mb-6">
            {item.tag}
          </p>
          }
          <h1 className={`${item?.textColor} text-4xl md:text-[56px] leading-tight md:leading-14.5 font-bold uppercase`}>
            {item.title}
          </h1>

          <p className={`${item?.ParagraphColor} text-[15px] leading-6.25 mt-6 mb-10 px-2 md:px-0`}>
            {item.description}
          </p>

          <button className=" cursor-pointer bg-[#D87D4A] text-white px-8 py-4 hover:bg-[#D87D4A]/80 transition-colors">
            {item.buttonText}
          </button>
        </div>

        <div className={`${item?.imageBackGround} relative w-full md:w-[591px] h-[300px] md:h-[613px] overflow-hidden mt-8 md:mt-0`}>
          <Image
            src={item?.image?.src}
            alt={item?.image?.alt}
            fill
            className="object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
      </div>
    </section>
  );
}