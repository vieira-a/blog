import { useState } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Post from "./components/Post";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <Navbar dark={darkMode} />
      <div className="text-right p-6">
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
      <main>
        <Hero />
        <Post />
        <Newsletter />
        <Footer />
      </main>
    </section>
  );
}

export default App;
