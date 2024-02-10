import React, { useContext, useRef, useState } from "react";
import "./product.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Slide from "react-reveal/Slide";
import { LocalizationApi } from "../../context/localizationContext";
import Title from "../../components/Title/Title";

const images = [
  {
    img: "https://eshikoyna.uz/wp-content/uploads/2023/04/Uzbte.jpeg",
    alt: "Eshiklar",
    text: "PVH yoki alyumindan eshik va oynalar",
    height: "",
    style: "mt-16 px-3 py-5",
  },
  {
    img: "https://eshikoyna.uz/wp-content/uploads/2023/04/Untitled-design-14.png",
    alt: "Peregorodka",
    text: "Qalin shishalik peregorodkalar",
    height: "",
    style: "mt-16 px-5 py-8",
  },
  {
    img: "https://eshikoyna.uz/wp-content/uploads/2023/04/195271993_izobragenie_podokonnik_lalbero_bruno_400_mm_1200x800.jpeg",
    alt: "Podokonniklar",
    text: "Podokonniklar",
    height: "pt-32",
    style: "mt-36 px-5 py-8",
  },
  {
    img: "https://eshikoyna.uz/wp-content/uploads/2023/04/moskit-1536x922.jpeg",
    alt: "Moskitniy setkalar",
    text: "Moskitniy setkalar",
    height: "pt-32",
    style: "mt-36 px-5 py-8",
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
      <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center">
        {images.map((item, i) => (
          <Slide bottom key={i}>
            <div>
              <div className="cardImg">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className={`w-[400px] h-[300px]`}>
                  <img
                    className={`${item.height} px-5`}
                    src={item.img}
                    alt={item.alt}
                  />
                </button>
              </div>
              <div
                className={`${item.style} mx-6 bg-header text-normtext font-bold text-center text-3xl max-w-sm`}>
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
            src: "https://imageslicer.com/tmp/11ea3aded53191/slice_1-9fd8d8cf85.png",
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
