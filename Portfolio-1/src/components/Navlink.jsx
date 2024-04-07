// import {motion as m} from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Navlink({text, to}) {

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-zinc-700 border-zinc-700 border-b-[1px] relative"
          : "nav-link relative"
      }
      to={to}
    >
      <span>{text}</span>
    </NavLink>
  );
}

export default Navlink;