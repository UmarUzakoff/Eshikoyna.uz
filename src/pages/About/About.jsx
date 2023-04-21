import React from "react";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { LocalizationApi } from "../../context/localizationContext";
import Slide from "react-reveal/Slide";
import logo from "../../images/logo.png";

const About = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <section className="bg-header py-10">
      <div className="flex flex-wrap justify-center gap-5 md:gap-28 items-center container">
        <Slide left>
          <div className="flex w-4/5 md:w-2/5 flex-col">
            <Title
              position={"text-start"}
              text={
                language === "uz"
                  ? "Biz haqimizda"
                  : language === "ru"
                  ? "О нас"
                  : "About Us"
              }
            />
            <p className="text-sm font-semibold text-normtext lg:text-xl dark:text-gray-400">
              {language === "uz"
                ? "«RUSTAM PROFIL» xususiy korxonasi 2017 yilda tashkil topgan bo’lib, bugungi kunda qurilish sohasida kerakli bo’lgan profnastil, gipsokarton uchun profillar ishlab chiqarish bilan bir qatorda alyumin yoki plastik eshik va oynalar yasash va o’rnatish ishlarini ham amalga oshirib kelmoqda. Xizmatlar katta tajribaga ega bo’lgan mutaxassislar tomonidan bajariladi. Mahsulotlarimiz sifatli bo’lishi uchun biz yurtimizda mashxur bo’lgan AKFA, IMZO va ENGELBERG kabi brendga ega profillarini ishlatamiz"
                : language === "ru"
                ? 'Частное предприятие "РУСТАМ ПРОФИЛЬ" создано в 2017 году. и востребован в строительной отрасли сегодня профнастил - это производство профилей для гипсокартона изготовление и установка алюминиевых или пластиковых дверей и окон тоже делает свое дело. Услуги для большого опыта выполняются специалистами, имеющими Наши продукты AKFA, IMZO, которая славится в нашей стране своим качеством и мы используем профили таких брендов, как ENGELBERG'
                : '"RUSTAM PROFIL" private enterprise was established in 2017 and is needed in the construction industry today profnastil is one with the production of profiles for plasterboard production and installation of aluminum or plastic doors and windows is also doing its work. Services to great experience performed by specialists who have Our products AKFA, IMZO, which is famous in our country for its quality and we use profiles with brands like ENGELBERG'}
            </p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;
