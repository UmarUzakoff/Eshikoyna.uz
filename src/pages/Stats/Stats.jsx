import React from "react";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { LocalizationApi } from "../../context/localizationContext";
import Slide from "react-reveal/Slide";
import stats1 from "../../images/stats1.png";
import stats2 from "../../images/stats2.png";
import stats3 from "../../images/stats3.png";
import stats4 from "../../images/stats4.png";
import RightStat from "./RightStat";
import LeftStat from "./LeftStat";

const stats = [
  {
    icon: stats1,
    text1: "Tajriba",
    text2:
      "Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi",
  },
  {
    icon: stats2,
    text1: "Individual Yondashuv",
    text2: "Har bir mijozga individual ravishda yondashuv",
  },
  {
    icon: stats3,
    text1: "Tezkorlik",
    text2: "Kelishilgan muddatlardan kechiktirmay ishlar yakunlanadi",
  },
  {
    icon: stats4,
    text1: "Nazorat",
    text2:
      "Yasashdan o’rnatilgunga qadar sifatli amalga oshirilishi nazorat qilinadi va ta’minlanadi",
  },
];

const Stats = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <section className="bg-white pt-10">
      <Title
        position={"text-center"}
        text={
          language === "uz"
            ? "Nega bizni tanlashingiz kerak?"
            : language === "ru"
            ? "Почему вы должны выбрать нас?"
            : "Why should you choose us?"
        }
      />
      <Slide bottom>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-2 ">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <div className="text-center" key={i}>
                <div className="flex items-center justify-center mx-auto mb-5 rounded-full bg-indigo-50 w-16 h-12">
                  <img src={item.icon} alt="stats" />
                </div>
                <p className="mb-2 font-bold text-xl">{item.text1}</p>
                <p className="text-gray-700">{item.text2}</p>
              </div>
            ))}
            ;
          </div>
        </div>
      </Slide>
      <RightStat />
      <LeftStat />
    </section>
  );
};

export default Stats;
