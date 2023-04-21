import React from "react";
import About from "../About/About";
import Aloqa from "../Aloqa/Aloqa";
import Hero from "../Hero/Hero";
import Product from "../Product/Product";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <Product />
      <About />
      <Stats />
      <Aloqa />
    </main>
  );
};

export default Home;
