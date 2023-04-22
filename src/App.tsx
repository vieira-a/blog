import "./styles/global.css";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PostContent from "./components/Post/PostContent";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostContent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}
