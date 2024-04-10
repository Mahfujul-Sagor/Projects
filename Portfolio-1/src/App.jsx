import Navbar from "./components/Navbar.jsx";
// import { Outlet, useLocation } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {/* <Outlet location={location} /> */}
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
