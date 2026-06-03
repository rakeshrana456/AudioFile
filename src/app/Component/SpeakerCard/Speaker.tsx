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

export default function Speaker({
  item,
}: SpeakerBannerProps) {
  return (
    <section className="py-10">
      <div className="container">
        <div className={`${item.bgColor} h-140 rounded-lg overflow-hidden`}>
          <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24">

         
            <div className="relative top-17 w-[320px] h-[400px] lg:w-[410px] lg:h-[500px]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-contain"
              />
            </div>

               <div className="max-w-[350px] text-center lg:text-left pb-12 lg:pb-0">
              <h2 className="text-white text-[56px] leading-[58px] font-bold tracking-[2px] uppercase">
                {item.title}
              </h2>

              <p className="text-white/75 text-[15px] leading-[25px] mt-6 mb-10">
                {item.description}
              </p>

              <button className="bg-black text-white px-8 py-4 text-[13px] font-bold tracking-[1px] uppercase hover:bg-[#4C4C4C] transition">
                {item.buttonText}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}