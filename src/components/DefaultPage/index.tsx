import "../../styles/global.css";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function DefaultPage() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <Navbar dark={darkMode} />
      <div className="text-right p-6 md:pt-24">
        <button
          aria-label="Change between dark and light mode"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <IoSunny size={24} className="text-zinc-50" />
          ) : (
            <IoMoonOutline size={24} />
          )}
        </button>
      </div>
      <Outlet />
      <Footer />
    </section>
  );
}
