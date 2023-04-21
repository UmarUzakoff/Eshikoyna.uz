import React, { useContext } from "react";
import "./header.css";
import { LocalizationApi } from "../../../context/localizationContext";
import logo from "../../../images/logo.png";
import SocialMedia from "./SocialMedia";
import Navbar from "./Navbar";

const Header = () => {
  const { setLanguage } = useContext(LocalizationApi);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <header className="container bg-header sticky top-0 z-50">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <img src={logo} alt="logo" className=" w-24 " />
          <div className="menu-items">
            <Navbar />
            <select
              onChange={onChange}
              className="bg-header rounded-md text-telegram">
              <option id="uz" value="uz" defaultChecked className="uzbek">
                uz
              </option>
              <option value="ru" className="russian">
                ru
              </option>
              <option value="en" className="eng">
                en
              </option>
            </select>
            <SocialMedia />
            <button className="button-17">
              <a href="tel:+998909089477">+998 90 908 94 77</a>
            </button>
          </div>
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
