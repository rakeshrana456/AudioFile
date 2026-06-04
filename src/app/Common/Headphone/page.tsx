import HeroCrad from "../../Reuseable/HeroCrad";
import HeadPhoneHero from "@/app/HeadPhone/Hero/HeadPhoneHero"
import { HeadphoneDataFirst, HeadphoneDataSecond } from "@/Data/data"
export default function page() {
  return (
    <>
      <section className="bg-[#191919]">
        <div className="container min-h-[232px] flex items-center justify-center">
          <h1 className="text-[40px] font-bold">HEADPHONES</h1>
        </div>
      </section>
      {HeadphoneDataFirst.map((item) => (
        <HeadPhoneHero key={item.id} item={item} />
      ))}

       <HeroCrad data={HeadphoneDataSecond} />
    </>
  )
}