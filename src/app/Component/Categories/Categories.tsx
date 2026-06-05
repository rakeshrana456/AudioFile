import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { categories } from "@/Data/data";
import Link from "next/link"

export default function CategorySection() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-0 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 py-10">
          {categories.map((item, index) => (

            <Link key={index} href={`${item.href}`}>
              <div
                key={item.id}
                className="relative bg-gray-300 rounded-lg pt-14 pb-8 flex flex-col items-center mx-4 sm:mx-0 my-5 lg:my-0"
              >
                <div className="absolute -top-12 w-full flex justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className=" cursor-pointer object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
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
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}