import { useContext } from "react";
import Button from "../../components/Button/Button";
import { LocalizationApi } from "../../context/localizationContext";
import Slide from "react-reveal/Slide";
import "./stats.css";
import cardImg2 from "../../images/cardImg2.jpg";

const LeftStat = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <section className="bg-header mt-12">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="flex flex-col items-center justify-around w-full mb-5 lg:flex-row">
          <Slide left>
            <div className="mt-24 flex items-center justify-center lg:w-1/2">
              <div className="statImg">
                <img src={cardImg2} alt="smth" className="rounded-xl" />
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="lg:mb-0 lg:max-w-lg lg:pr-5 relative top-10 lg:top-24">
              <div className="max-w-x">
                <p className="text-base text-center font-semibold text-normtext lg:text-xl dark:text-gray-400">
                  {language === "uz"
                    ? "Bizning korxona o’z zimmasiga yuklatilgan vazifalarni belgilangan muddatlarda tez va sifatli bajarib berilishi, romlar uchun eng sifatli homashyolari ishlatilishi hamda mijozlarga qulay shartlar asosida ish olib borilishi bilan ajralib turadi."
                    : language === "ru"
                    ? "Нашу компанию отличает быстрое и качественное выполнение поставленных задач, использование самого качественного сырья для рам, работа на основе выгодных условий для клиентов."
                    : "Our company is distinguished by its fast and high-quality performance of the assigned tasks, the use of the best quality raw materials for frames, and the work on the basis of favorable conditions for customers."}
                </p>
              </div>
              <div className="lg:mt-20 lg:mb-20 mt-8 mb-4 flex justify-center items-center space-x-3">
                <Button />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default LeftStat;
