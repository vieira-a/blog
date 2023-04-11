import "./styles/global.css";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <Navbar />
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
      </main>
    </section>
  );
}

export default App;
