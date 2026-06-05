import { products } from "@/Data/DataJs";
import HeadPhoneHero from "../HeadPhone/Hero/HeadPhoneHero";
import BestAudioGear from "../Component/BestAudio/BestAudio";
import { notFound } from "next/navigation";
import CategorySection from "../Component/Categories/Categories";
interface PageProps {
  params: Promise<{
    category: string;
  }>;
}
export async function generateStaticParams() {
  const categories = [...new Set(products.map((item) => item.category))];

  return categories.map((category) => ({
    category,
  }));
}
export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (item) => item.category === category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <>
     <section className="bg-[#191919]">
      <div className="container min-h-[232px] flex items-center justify-center">
        <h1 className="text-[40px] font-bold text-white uppercase">
          {category}
        </h1>
      </div>
    </section>
      {categoryProducts?.map((item) => (
        <HeadPhoneHero
          key={item.id}
          item={item}
          category={category}
        />
      ))}
      <CategorySection/>
      <BestAudioGear/>
    </>
  );
}