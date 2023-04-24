import { useContext } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { ThemeContext } from "../../context/themeContext";

export default function TogglerDarkMode() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="text-right p-6 md:pt-24">
      <button
        aria-label="Change between dark and light mode"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <IoSunny size={24} className="text-zinc-50" />
        ) : (
          <IoMoonOutline size={24} />
        )}
      </button>
    </div>
  );
}
