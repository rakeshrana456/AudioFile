import HeroCrad from "../../Reuseable/HeroCrad";
import HeadPhoneHero from "@/app/HeadPhone/Hero/HeadPhoneHero"
import CategorySection from "@/app/Component/Categories/Categories";
import BestAudioGear from "@/app/Component/BestAudio/BestAudio";
import { HeadphoneDataFirst, HeadphoneDataSecond, HeadphoneDataThird } from "@/Data/data"
import styles from "./page.module.css";

export default function page() {
  return (
    <>
      <section className="bg-[#191919]">
        <div
          className={`container min-h-[232px] flex items-center justify-center ${styles.headingWrapper}`}
        >
          <div className={`${styles.smoke} ${styles.smoke1}`}></div>
          <div className={`${styles.smoke} ${styles.smoke2}`}></div>
          <div className={`${styles.smoke} ${styles.smoke3}`}></div>
          <h1 className="text-[40px] font-bold text-white">
            {"HEADPHONES".split("").map((char, index) => (
              <span
                key={index}
                className={styles.letter}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </section>
      {HeadphoneDataFirst.map((item) => (
        <HeadPhoneHero key={item.id} item={item} />
      ))}

      <HeroCrad data={HeadphoneDataSecond} />
      {HeadphoneDataThird.map((item) => (
        <HeadPhoneHero key={item.id} item={item} />
      ))}
      <CategorySection />
      <BestAudioGear />
    </>
  )
}