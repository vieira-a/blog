import "../../styles/global.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TogglerDarkMode from "../TogglerDarkMode";
import MenuProvider from "../../context/menuContext";
import Menu from "../Menu";

export default function DefaultPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`${darkMode ? "dark" : "light"} relative`}>
      <MenuProvider>
        <Navbar dark={darkMode} />
        <Menu />
      </MenuProvider>
      <TogglerDarkMode />
      <Outlet />
      <Footer />
    </section>
  );
}
