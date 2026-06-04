import Image from "next/image";
import { bestAudioData } from "@/Data/data";

export default function BestAudioGear() {
  const { title,highlight, subtitle, description, image } = bestAudioData;

  return (
    <section className="container py-12 md:py-24 px-4 md:px-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        
        <div className="max-w-[445px] text-center lg:text-left px-4 lg:px-0">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37px] text-[#000000] font-bold uppercase leading-tight">
            {title}{" "}
            <span className="text-[#D87D4A]">{highlight}</span>
            <br />
            {subtitle}
          </h2>

          <p className="mt-6 md:mt-8 text-[14px] sm:text-[15px] leading-[22px] sm:leading-[25px] text-black/50 px-2 sm:px-0">
            {description}
          </p>
        </div>

        <div className="w-full lg:max-w-[540px] px-4 sm:px-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={540}
            height={588}
            className="w-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}