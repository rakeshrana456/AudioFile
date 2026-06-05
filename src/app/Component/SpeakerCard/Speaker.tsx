import Image from "next/image";

interface SpeakerBannerProps {
  item: {
    id: number;
    title: string;
    description: string;
    bgColor: string;
    buttonText: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

export default function Speaker({ item }: SpeakerBannerProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div
          className={`${item.bgColor} rounded-lg overflow-hidden min-h-150 lg:min-h-140`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-24">

            {/* Image */}
            <div className="relative w-[220px] h-[260px] sm:w-[280px] sm:h-[340px] md:w-[320px] md:h-[400px] lg:w-[410px] lg:h-[500px] mt-8 lg:mt-12">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="max-w-[350px] text-center lg:text-left py-8 lg:py-0">
              <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold tracking-[2px] uppercase">
                {item.title}
              </h2>

              <p className="text-white/75 text-sm md:text-base leading-7 mt-6 mb-8">
                {item.description}sasasasasasasasa
              </p>

              <button className="cursor-pointer bg-black text-white px-8 py-4 text-[13px] font-bold tracking-[1px] uppercase hover:bg-[#4C4C4C] transition">
                {item.buttonText}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}