import Speaker from "@/app/Component/SpeakerCard/Speaker";
import { HeroCardData } from "@/app/Types/types";

interface SpeakerCardProps {
  product: HeroCardData[];
}

export default function SpeakerCard({ product }: SpeakerCardProps) {
  return (
    <>
      {product?.map((item) => (
        <Speaker key={item.id} item={item} />
      ))}
    </>
  );
}