import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../context/localizationContext";

const Button = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <div className="flex justify-center items-center">
      <button className="bg-[#062a4d] px-8 py-3 mb-16 rounded-lg text-2xl border-neutral-400 border-2 text-white hover:text-[#062a4d] hover:shadow-[inset_23rem_0_0_0] hover:shadow-white duration-[500ms,800ms] transition-[color,box-shadow]">
        <Link to={"tel:+9989938869"} className="font-extrabold">
          <span>
            {" "}
            {language === "uz"
              ? "BOG'LANISH"
              : language === "ru"
              ? "СВЯЗАТЬСЯ"
              : "CONTACT"}
            <i>&nbsp; &#8594;</i>
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Button;
