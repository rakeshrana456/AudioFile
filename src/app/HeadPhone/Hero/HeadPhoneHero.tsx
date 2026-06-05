import Image from "next/image";
import { Product } from "@/app/Types/types";

interface HeroProps {
  item: Product;
    category: string;
}

export default function HeadPhoneHero({ item,category}: HeroProps) {
  return (
<>
      {/* <section className="bg-[#191919]">
        <div
          className={`container min-h-[232px] flex items-center justify-center `}
        >
          <h1 className="text-[40px] font-bold text-white">
            {category} 
          </h1>
           
        </div>
        </section> */}
    <section className="py-10 md:py-20 bg-[#FFFFFF] px-4 md:px-0">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-h-full lg:max-h-149">
        
       
        <div className={`
          relative w-full lg:w-153.75 h-75 sm:h-100 md:h-125 lg:h-159.5 
          rounded-xl bg-gray-300 overflow-hidden group
          ${item?.showTag ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}
        `}>
          <Image
            src={item?.image?.src}
            alt={item.image.alt}
            fill
            className="cursor-pointer object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          />
        </div>

        
        <div className={`
          max-w-100 text-center lg:text-left px-4 lg:px-0
          ${item?.showTag ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}
        `}>
          {item?.showTag && (
            <p className="text-[#D87D4A] text-sm tracking-[10px] uppercase mb-6">
              {item.tag}
            </p>
          )}

          <h1 className="text-black text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight sm:leading-12.5 md:leading-13.75 lg:leading-14.5 font-bold uppercase">
            {item.title}
          </h1>

          <p className="text-black text-[14px] sm:text-[15px] leading-5.5 sm:leading-6.25 mt-6 mb-8 sm:mb-10 px-2 sm:px-0">
            {item.description}
          </p>

          <button className="bg-[#D87D4A] cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#D87D4A]/80 transition-colors">
            {item.buttonText}
          </button>
        </div>
      </div>
    </section>
    </>
  );
}