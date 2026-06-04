import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { categories } from "@/Data/data";

export default function CategorySection() {
  return (
    <section className="py-10 md:py-20 px-4 md:px-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 py-10">
          {categories.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-300 rounded-lg pt-14 pb-8 flex flex-col items-center mx-4 sm:mx-0 my-5 lg:my-0"
            >
              <div className="absolute -top-12 w-full flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
                />
              </div>

              <h3 className="text-[16px] sm:text-[18px] text-[#000000] font-bold tracking-[1.3px] mt-6 text-center px-2">
                {item.title}
              </h3>

              <button className="cursor-pointer flex items-center gap-2 mt-4 text-sm font-bold text-black/50 hover:text-[#D87D4A] transition">
                SHOP
                <ChevronRight
                  size={16}
                  className="text-[#D87D4A]"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}