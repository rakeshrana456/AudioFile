
import { heroData,speakerBanner,SpeakerData } from "@/Data/data";
import HeroCrad from "./Reuseable/HeroCrad";
import CategorySection from "./Component/Categories/Categories";
import SpeakerCard from "./Reuseable/SpeakerCard";
import Zx from "./Component/ZX7/Zx";
import Earphone from "./Component/Earphone/Earphone";
import BestAudioGear from "./Component/BestAudio/BestAudio";


export default function Home() {
  return (
    <>
  
      <HeroCrad data={heroData} />
      <CategorySection />
      <SpeakerCard product={speakerBanner} />
      <Zx />
      <Earphone />
      <BestAudioGear />
  
    </>
  );
}
