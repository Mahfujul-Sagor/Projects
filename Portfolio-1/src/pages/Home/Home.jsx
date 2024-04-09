// import { useState } from "react";
import { motion as m } from "framer-motion";
import viteLogo from "/public/vite.svg";
import Button from "../../components/Button";
import TextSpan from "../../components/TextSpan";

function Home() {
  
  const sentence = "Web Developer".split("");

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const professionVariant = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -200,
      opacity: 0,
    },
  };

  const imgVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#E7E1D4] flex justify-center items-center overflow-y-scroll no-scrollbar">
      <m.div
        className="flex justify-center items-center gap-2"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <m.div
          className="z-10 flex flex-col justify-center items-start gap-4"
          variants={professionVariant}
        >
          <div>
            {sentence.map((letter, index) => {
              return <TextSpan key={index}>{letter === ' ' ? '\u00A0' : letter}</TextSpan>;
            })}
          </div>
          <h2 className="text-2xl font-[Playfair]">
            Mymensingh,&nbsp;Bangladesh
          </h2>
          <Button text="Hire me" to="/contact" />
        </m.div>
        <m.div
          className="max-w-[40vw] min-h-screen bg-sky-200 px-10 flex justify-center items-center"
          variants={imgVariant}
        >
          <m.img src={viteLogo} alt="my-picture" whileHover={{ scale: 1.1 }} />
        </m.div>
      </m.div>
    </div>
  );
}

export default Home;
