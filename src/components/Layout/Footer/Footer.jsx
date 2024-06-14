import React, { useContext } from "react";
import { LocalizationApi } from "../../../context/localizationContext";
import logo from "../../../images/logo.png";

const Footer = () => {
  const { language } = useContext(LocalizationApi);

  return (
    <footer className="bg-header rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex md:flex-row gap-5 md:gap-0 flex-col items-center justify-center sm:justify-around">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt="logo" className=" w-40 " />
          </a>
          <div className="flex flex-col justify-center items-center hover:text-telegram sm:text-lg text-sm">
            <address>
              {" "}
              {language === "uz"
                ? "Toshkent shahar, Mirzo Ulug’bek tumani,"
                : language === "ru"
                ? "г. Ташкент, Мирзо-Улугбекский район,"
                : "Tashkent city, Mirzo Ulugbek district,"}
            </address>
            <address>
              {" "}
              {language === "uz"
                ? "Alisherobod MFY, Nurli zamin ko’chasi, 83 – А"
                : language === "ru"
                ? "Алишерабадский МФУ, ул. Нурлы замина, 83-А"
                : "Alisherabad MFY, Nurli zamin str., 83 - A"}
            </address>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a href="tel:+998909089477" className="hover:text-telegram">
              +998 90 908 94 77
            </a>
            <a href="tel:+998946666988" className="hover:text-telegram">
              +998 94 666 69 88
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Eshikoyna.Uz
          </a>
          &nbsp;| Created By{" "}
          <a href="https://uzakoff.uz" target="_blank" className=" underline">Uzakoff</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
