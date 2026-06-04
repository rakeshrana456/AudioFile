import HeadPhoneHero from "@/app/HeadPhone/Hero/HeadPhoneHero"
import HeroCard from "@/app/Reuseable/HeroCrad"
import { SpeakerData, SpeakerDataSecond} from "@/Data/data"
import CategorySection from "@/app/Component/Categories/Categories"
import BestAudioGear from "@/app/Component/BestAudio/BestAudio"
export default function page()
{
    return(
        <>
        <section className="bg-[#191919]">
        <div
          className={`container min-h-[232px] flex items-center justify-center `}
        >
          <h1 className="text-[40px] font-bold text-white">
            Speaker  
          </h1>
           
        </div>
        </section>

              {SpeakerData.map((item) => (
               <HeadPhoneHero key={item.id} item={item} />
             ))}
        <HeroCard data={SpeakerDataSecond} />
         <CategorySection />
        <BestAudioGear />
     
        </>
    )
}