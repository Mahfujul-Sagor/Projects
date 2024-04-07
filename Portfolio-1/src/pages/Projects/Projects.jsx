import { motion as m } from "framer-motion";
import viteLogo from "/public/vite.svg";
import reactLogo from "../../assets/react.svg";
import Button from "../../components/Button";

function Projects() {
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

  const projectVariant = {
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
        className="flex gap-10 justify-center items-center max-md:flex-col"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <m.div
          className="text-xs w-1/4 flex flex-col justify-center items-start gap-4"
          variants={projectVariant}
        >
          <h1 className="text-4xl font-[Playfair] font-semibold">Project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempora libero nobis asperiores ea labore amet iure ut illo quisquam
            veritatis quas tempore ab, doloremque facere, ipsa laboriosam optio
            iste!
          </p>
          <p>React&nbsp;Tailwindcss</p>
          <Button text="Hire me" to="/contact" />
        </m.div>
        <div className="w-1/4 grid grid-cols-3">
          <m.img src={reactLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={viteLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={reactLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={viteLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={reactLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={viteLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={reactLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={viteLogo} alt="project-picture" variants={imgVariant} />
          <m.img src={reactLogo} alt="project-picture" variants={imgVariant} />
        </div>
      </m.div>
    </div>
  );
}

export default Projects;
