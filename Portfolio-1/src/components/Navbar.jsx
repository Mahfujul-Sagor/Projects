import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import Navlink from "./Navlink";

function Navbar() {
  const navVariants = {
    hidden: {
      y: -50,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <m.div
      className="w-full bg-transparent flex justify-between items-center px-5 py-5 fixed"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-2xl font-semibold font-[PlayfairDisplay]">
        <NavLink to="/">Portfolio</NavLink>
      </div>
      <div className="w-1/4">
        <div className="text-xs flex justify-around items-center">

          <Navlink text='Home' to='/' />
          <Navlink text='About' to='/about' />
          <Navlink text='Projects' to='/projects' />
          <Navlink text='Contact' to='/contact' />


          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-zinc-700 border-zinc-700 border-b-[1px]"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-zinc-700 border-zinc-700 border-b-[1px]"
                : ""
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-zinc-700 border-zinc-700 border-b-[1px]"
                : ""
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-zinc-700 border-zinc-700 border-b-[1px]"
                : ""
            }
            to="/contact"
          >
            Contact
          </NavLink> */}
        </div>
      </div>
    </m.div>
  );
}

export default Navbar;
