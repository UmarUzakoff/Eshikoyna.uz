import { useContext } from "react";
import Button from "../../components/Button/Button";
import { LocalizationApi } from "../../context/localizationContext";
import Slide from "react-reveal/Slide";
import "./stats.css";
import cardImg1 from "../../images/cardImg1.jpg";

const RightStat = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <section className="bg-header">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="flex flex-col items-center justify-around w-full mb-5 lg:flex-row">
          <Slide left>
            <div className="lg:mb-0 lg:max-w-lg lg:pr-5 relative top-10 lg:top-24">
              <div className="max-w-x">
                <p className="text-base text-center font-semibold text-normtext lg:text-xl dark:text-gray-400">
                  {language === "uz"
                    ? "Bizning korxonada turli hil o’lchamdagi eshik va oynalar ishlab chiqariladi. Undan tashqari, hozirgi zamonaviy ofislar uchun xonalarda devor o’rniga qalin shishalar yasash va o’rnatish xizmatlari ham mavjud."
                    : language === "ru"
                    ? "Наше предприятие изготавливает двери и окна различных размеров выпущен. Кроме того, для современных офисов изготовление и установка толстого стекла вместо стен в комнатах услуги также доступны."
                    : "Our enterprise produces doors and windows of various sizes is released. In addition, for modern offices making and installing thick glass instead of walls in rooms services are also available."}
                </p>
              </div>
              <div className="lg:mt-20 lg:mb-20 mt-8 mb-4 flex justify-center items-center space-x-3">
                <Button />
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="flex items-center justify-center lg:w-1/2">
              <div className="statImg">
                <img src={cardImg1} alt="smth" className="rounded-xl" />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default RightStat;
