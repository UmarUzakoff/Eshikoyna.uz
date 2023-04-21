import React, { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { LocalizationApi } from "../../../context/localizationContext";
import styled from "styled-components";

const Navbar = () => {
  const [bar] = useState(false);
  const { language } = useContext(LocalizationApi);
  const onClick = () => {
    window.location.href = "#products";
  };

  const onClick1 = () => {
    window.location.href = "#hero";
  };

  const onClick2 = () => {
    window.location.href = "#aloqa";
  };

  return (
    <Nav bar={bar}>
      <NavLink
        className={({ isActive }) => `${isActive ? "navActive" : ""} p-1`}
        onClick={onClick1}>
        {language === "uz"
          ? "BOSH SAHIFA"
          : language === "ru"
          ? "ГЛАВНАЯ"
          : "HOME"}
      </NavLink>
      <span>
        <NavLink
          className={({ isActive }) => `${isActive ? "a" : ""} p-1`}
          onClick={onClick}>
          {language === "uz"
            ? "MAHSULOTLAR"
            : language === "ru"
            ? "ТОВАРЫ"
            : "PRODUCTS"}
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) => `${isActive ? "a" : ""} p-1`}
          onClick={onClick2}>
          {language === "uz"
            ? "ALOQA"
            : language === "ru"
            ? "КОНТАКТ"
            : "CONTACTS"}
        </NavLink>
      </span>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  @media (max-width: 140px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease;
    overflow: hidden;
    z-index: 100;
  }
  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  span {
    margin-left: 1rem;
    a {
      color: #062a4d;
      text-decoration: none;
      font-weight: 600;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #062a4d;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      @media (max-width: 768px) {
        color: #ffff;
        height: 1px;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
    }
  }
`;
