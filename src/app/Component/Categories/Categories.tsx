import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { categories } from "@/Data/data";

export default function CategorySection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-300 rounded-lg pt-14 pb-8 flex flex-col items-center"
            >
              <div className="absolute -top-12">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>

              <h3 className="text-[18px] text-[#000000] font-bold tracking-[1.3px] mt-6">
                {item.title}
              </h3>

              <button className=" cursor-pointer flex items-center gap-2 mt-4 text-sm font-bold text-black/50 hover:text-[#D87D4A] transition">
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