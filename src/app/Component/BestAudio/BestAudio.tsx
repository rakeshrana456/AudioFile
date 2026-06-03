import Image from "next/image";
import { bestAudioData } from "@/Data/data";

export default function BestAudioGear() {
  const { title,highlight, subtitle, description, image } = bestAudioData;

  return (
    <section className="container py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        <div className="max-w-[445px] text-center lg:text-left ">
          <h2 className="text-[28px] text-[#000000] md:text-[37px] font-bold uppercase leading-tight">
            {title}{" "}
            <span className="text-[#D87D4A]">{highlight}</span>
            <br />
            {subtitle}
          </h2>

          <p className="mt-8 text-[15px] leading-[25px] text-black/50">
            {description}
          </p>
        </div>

        <div className="w-full lg:max-w-[540px]">
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