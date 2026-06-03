import Speaker from "@/app/Component/SpeakerCard/Speaker";
import { SpeakerType } from "@/app/Types/types";

interface SpeakerCardProps {
  product: SpeakerType[];
}

export default function SpeakerCard({ product }: SpeakerCardProps) {
  return (
    <>
      {product.map((item) => (
        <Speaker key={item.id} item={item} />
      ))}
    </>
  );
}