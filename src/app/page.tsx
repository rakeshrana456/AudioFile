import Image from "next/image";
// import Button from "@/Buttons/Button";
// import Navbar from "./Component/Navbar/Navbar";
import { heroData,speakerBanner } from "@/Data/data";
import HeroCrad from "./Reuseable/HeroCrad";
import CategorySection from "./Component/Categories/Categories";
import SpeakerCard from "./Reuseable/SpeakerCard";
import Zx from "./Component/ZX7/Zx";
import Earphone from "./Component/Earphone/Earphone";
import BestAudioGear from "./Component/BestAudio/BestAudio";
import Footer from "./Component/Footer/Footer";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCrad product={heroData} />
      <CategorySection />
      <SpeakerCard product={speakerBanner} />
      <Zx />
      <Earphone />
      <BestAudioGear />
      {/* <Footer /> */}
    </>
  );
}
