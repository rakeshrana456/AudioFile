import Image from "next/image";
import { Item } from "@/app/Types/types";

interface HeroProps {
  item: Item;
}
export default function HeadPhoneHero({ item }: HeroProps) {
  return (
    <section >
      <div className="container flex items-center justify-between">
        <div className="relative w-[615px] h-[638px] rounded-xl ">
  <Image
    src={item?.imageSec?.src}
    alt={item.imageSec.alt}
    fill
    className="object-contain"
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