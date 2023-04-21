import React from "react";
import Zoom from "react-reveal/Zoom";
import "./hero.css";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <Zoom>
      <section
        className="hero container xl:w-4/5 my-5 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${require("../../images/hero.jpg")})`,
        }}>
        <h2 id="hero" className="mb-10">
          <a href="#hero" aria-hidden="true" hidden>
            #
          </a>
        </h2>
        <div className="relative flex justify-center items-center text-center">
          <div className="max-w-xl text-center flex justify-center items-center relative xl:top-96 xl:mt-12 top-48 md:top-96 sm:top-72">
            <div className="mt-10 space-y-20">
              <div className="w-full">
                <div className="flex-1 h-full w-72 mx-auto">
                  <Zoom left>
                    <Button />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
};

export default Hero;
