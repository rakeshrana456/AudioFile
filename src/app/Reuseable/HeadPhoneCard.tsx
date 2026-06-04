
import HeadPhoneHero from "../HeadPhone/Hero/HeadPhoneHero"
import { HeadPhoneType } from "@/app/Types/types";

interface HeroCardProps {
  product: HeadPhoneType[];
}

export default function HeroCard({ product }: HeroCardProps) {
  return (
    <>
      {product.map((item) => (
        <HeadPhoneHero key={item.id} item={item} />
      ))}
    </>
  );
}
