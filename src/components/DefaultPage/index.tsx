import "../../styles/global.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TogglerDarkMode from "../TogglerDarkMode";

export default function DefaultPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <Navbar dark={darkMode} />
      <TogglerDarkMode />
      <Outlet />
      <Footer />
    </section>
  );
}
