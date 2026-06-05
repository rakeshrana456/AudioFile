import Speaker from "@/app/Component/SpeakerCard/Speaker";
import { SpeakerData } from "@/app/Types/types";

interface SpeakerCardProps {
  product: SpeakerData[];
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