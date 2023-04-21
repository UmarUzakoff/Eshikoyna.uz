import React from "react";
import Slide from "react-reveal/Slide";
import envelope from "../../images/Envelope.svg";
import call from "../../images/Phone.svg";
import map from "../../images/MapPin.svg";

const stats = [
  {
    icon: envelope,
    text1: "Elektron Pochta",
    text2:
      "Barcha o’zingizni qiziqtirgan savollaringizni pochta manzilimizga jo’natishingiz mumkin",
    contact: "mailto:",
    text3: "juraev.shuhrat1988@gmail.com",
    contactTo: "juraev.shuhrat1988@gmail.com",
  },
  {
    icon: call,
    text1: "Telefon",
    text2: "Buyurtma uchun quyidagi nomerlarimizga aloqaga chiqishingiz mumkin",
    contact: "tel:",
    text3: "+998 90 908 94 77",
    contactTo: "+998 90 908 94 77",
  },
  {
    icon: map,
    text1: "Bizning Manzil",
    text2:
      "Manzilimizga soat 09:00 dan 19:00 gacha tashrif buyurishingiz mumkin",
    contact: "",
    text3:
      "Toshkent shahar, Mirzo Ulug’bek tumani, Alisherobod MFY, Nurli zamin ko’chasi, 83 – А",
    contactTo: "https://eshikoyna.uz/",
  },
];

const Aloqa = () => {
  return (
    <>
      <h2 id="aloqa" className="mb-20">
        <a href="#aloqa" aria-hidden="true" hidden>
          #
        </a>
      </h2>
      <section className="bg-white flex flex-wrap justify-center items-center pt-10">
        <Slide bottom>
          <div className="px-4 pb-10 mx-auto md:px-24 lg:px-8 container">
            <div className="grid place-items-center gap-8 sm:grid-cols-1 lg:grid-cols-3">
              {stats.map((item, i) => (
                <div className="text-center w-4/5" key={i}>
                  <div className="flex items-center justify-center mx-auto mb-5 rounded-full bg-indigo-50 w-16 h-12">
                    <img src={item.icon} alt="stats" />
                  </div>
                  <p className="mb-2 font-bold text-xl">{item.text1}</p>
                  <p className="text-gray-700">{item.text2}</p>
                  <p className="mt-8">
                    <a
                      className="text-telegram font-bold underline hover:text-normtext"
                      href={`${item.contact}${item.contactTo}`}>
                      {item.text3}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Slide>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A55fb956f1aa44de3e54ce8540b6af42c2af5e1ac21c6899f50a59ab135210848&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          title="map"></iframe>
      </section>
    </>
  );
};

export default Aloqa;
