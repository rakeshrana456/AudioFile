import Hero from "../Component/Hero/Hero";
import HeadPhoneHero from "../HeadPhone/Hero/HeadPhoneHero"
import { Item } from "@/app/Types/types";

interface HeroCardProps {
  data: Item[];
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
