import { motion as m } from "framer-motion";
import reactLogo from "../../assets/react.svg";
import Button from "../../components/Button";

function About() {

  const containerVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 0.2,
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    }
  };

  const imgVariant = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.5,
      opacity: 0,
    },
  };

  const textVariant = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };


  return (
    <div className="w-full min-h-screen bg-[#E7E1D4] flex justify-center items-center overflow-y-scroll no-scrollbar">
      <m.div
        className="max-w-[70vw] bg-[#E2D6C9] border-black border-[0.5px] p-8 shadow-lg flex gap-10 max-md:flex-col"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <m.img src={reactLogo} alt="my-picture" variants={imgVariant} />

        <m.div className="w-[20rem]" variants={textVariant}>
          <h1 className="text-7xl font-semibold font-[PlayfairDisplay] mb-4">
            About Me
          </h1>

          <div className="mb-8 text-xs">
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              expedita assumenda explicabo illo ratione! Illo deleniti
              reiciendis repellat sit libero esse temporibus vel molestias rem.
            </p>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              earum est nisi officia sequi, saepe blanditiis. Voluptas animi.
            </p>
          </div>

          <Button text="View my work" to="/projects" />
        </m.div>
      </m.div>
    </div>
  );
}


export default About;
