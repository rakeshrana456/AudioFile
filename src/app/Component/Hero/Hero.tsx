import Image from "next/image";
import { Item } from "@/app/Types/types";
interface HeroProps {
  item: Item;
}
export default function Hero({ item }: HeroProps) {
  return (
    <section className={`${item.bgColor}`}>
      <div className="container min-h-158 flex items-center justify-between">
        <div className="max-w-100">
          {item?.Show && <p className="text-white/50 text-sm tracking-[10px] uppercase mb-6">
            {item.tag}
          </p>
          }
          <h1 className={`${item?.textColor} text-[56px] leading-14.5 font-bold uppercase`}>
            {item.title}
          </h1>

          <p className={`${item?.ParagraphColor} text-[15px] leading-6.25 mt-6 mb-10`}>
            {item.description}
          </p>

          <button className="bg-[#D87D4A] text-white px-8 py-4">
            {item.buttonText}
          </button>
        </div>

        <div className={`${item?.imageBackGround} relative  w-[591px] h-[613px] overflow-hidden `}>
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