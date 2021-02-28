import React, { useEffect } from "react";
import Hero from "../../images/hero.jpg";
import Logo from "../../images/logo.png";
import { gsap } from "gsap";

const HeroHeader = () => {
  useEffect(() => {
    gsap.to("h1", {
      visibility: "visible",
      delay: 0.2,
      duration: 3,
      ease: "power-3",
      y: -40,
      scale: 1.1,
    });
  }, []);

  return (
    <section
      className="text-center h-screen py-8 flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <img
        alt="spinning record"
        className="animate-spin block mx-auto mb-12"
        style={{ width: 250 }}
        src={Logo}
      />

      <h1
        style={{
          fontFamily: "Montserrat",
          textShadow: "1px 2px 4px black",
        }}
        className="invisible inline-block text-white font-black p-3 mb-4 text-6xl md:text-9xl"
      >
        Jockey
      </h1>
      <h1
        style={{
          fontFamily: "Montserrat",
          textShadow: "1px 2px 4px black",
        }}
        className="invisible inline-block text-white font-black p-3 mb-4 text-6xl md:text-9xl"
      >
        Club
      </h1>
    </section>
  );
};

export default HeroHeader;
