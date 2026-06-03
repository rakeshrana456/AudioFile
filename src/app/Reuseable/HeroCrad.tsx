import Hero from "../Component/Hero/Hero";
import { Item } from "@/app/Types/types";

interface HeroCardProps {
  product: Item[];
}

export default function HeroCard({ product }: HeroCardProps) {
  return (
    <>
      {product.map((item) => (
        <Hero key={item.id} item={item} />
      ))}
    </>
  );
}