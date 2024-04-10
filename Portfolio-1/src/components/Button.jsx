import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

function Button({ text,to , type, value }) {

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
