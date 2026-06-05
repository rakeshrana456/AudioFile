import Hero from "../Component/Hero/Hero";
import HeadPhoneHero from "../HeadPhone/Hero/HeadPhoneHero"
import { HeroCardData} from "@/app/Types/types";

interface HeroCardProps {
  data: HeroCardData[];
}

export default function HeroCard({ data }: HeroCardProps) {
  return (
    <>
      {data.map((item) => (
        <Hero key={item.id} item={item} />
      ))}
    </>
  );
}
