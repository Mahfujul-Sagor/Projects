import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

function Button({ text,to , type, value }) {
  // const buttonVariant = {
  //   hidden: {
  //     scale: 0,
  //     opacity: 0,
  //   },
  //   visible: {
  //     scale: 1,
  //     opacity: 1,
  //     transition: {
  //       delay: 0.4,
  //     },
  //   },
  //   exit: {
  //     scale: 0,
  //     opacity: 0,
  //   },
  // };

  return (
    <>
      <Link to={to}>
        <m.button
          type={type}
          value={value}
          className="button text-sm px-6 py-2 mt-4 uppercase shadow-lg"
        >
          {text}
        </m.button>
      </Link>
    </>
  );
}

export default Button;
