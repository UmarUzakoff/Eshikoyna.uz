import React, { useContext, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Slide from "react-reveal/Slide";
import { LocalizationApi } from "../../context/localizationContext";
import Title from "../../components/Title/Title";

const images = [
  {
    img: "https://t3.ftcdn.net/jpg/05/76/81/18/360_F_576811807_q50Z5p2FIPC11NPAF1XknYImAtXQDOUo.jpg",
    alt: "Eshiklar",
    text: "PVH yoki alyumindan eshik va oynalar",
    style: "mt-16 px-3",
  },
  {
    img: "https://www.bayviewwindows.ca/images_blog/sliding-patio-door-configuration.jpg",
    alt: "Peregorodka",
    text: "Qalin shishalik peregorodkalar",
  },
  {
    img: "https://i.pinimg.com/474x/d4/ee/d0/d4eed03eaa82f3e1a4d4fceb2446aa0e.jpg",
    alt: "Podokonniklar",
    text: "Podokonniklar",
  },
  {
    img: "https://m.media-amazon.com/images/I/71vNa6EqX2L._AC_SL1380_.jpg",
    alt: "Moskitniy setkalar",
    text: "Moskitniy setkalar",
  },
];

const Product = () => {
  const { language } = useContext(LocalizationApi);
  const zoomRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <section className=" w-full bg-white flex flex-col gap-10 justify-center">
      <h2 id="products" className="mb-10">
        <a href="#products" aria-hidden="true" hidden>
          #
        </a>
      </h2>
      <Title
        position={"text-center"}
        text={
          language === "uz"
            ? "Bizning mahsulotlar"
            : language === "ru"
            ? "Наши продукты"
            : "Our products"
        }
      />
      <div className="max-w-[1500px] mx-auto flex flex-row flex-wrap xl:flex-nowrap justify-center">
        {images.map((item, i) => (
          <Slide bottom key={i}>
            <div className="w-[350px] group mt-10 sm:mt-0">
              <div className="w-[330px] h-[300px]">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="w-[350px] h-[300px]">
                  <img
                    className={`w-full object-cover h-full px-5 duration-300 hover:scale-110 rounded-t-[50%]`}
                    src={item.img}
                    alt={item.alt}
                  />
                </button>
              </div>
              <div
                className={`h-40 mx-5 duration-300 group-hover:bg-normtext group-hover:text-header rounded-b-xl border-b border-x border-normtext bg-header flex justify-center items-center text-normtext font-bold text-center text-3xl max-w-sm`}>
                <p>{item.text}</p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      <Lightbox
        plugins={[Zoom, Fullscreen]}
        zoom={{ ref: zoomRef }}
        on={{
          click: () => zoomRef.current?.zoomIn(),
        }}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://eshikoyna.uz/wp-content/uploads/2023/04/Uzbte.jpeg",
          },
          {
            src: "https://eshikoyna.uz/wp-content/uploads/2023/04/Untitled-design-14.png",
          },
          {
            src: "https://eshikoyna.uz/wp-content/uploads/2023/04/195271993_izobragenie_podokonnik_lalbero_bruno_400_mm_1200x800.jpeg",
          },
          {
            src: "https://eshikoyna.uz/wp-content/uploads/2023/04/moskit-1536x922.jpeg",
          },
        ]}
      />
      ;
    </section>
  );
};

export default Product;
