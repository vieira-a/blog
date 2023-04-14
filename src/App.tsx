import "./styles/global.css";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Post from "./components/Post";
import { useState } from "react";
import Footer from "./components/Footer";
import PostFeatured from "./components/Post/PostFeatured";
import Newsletter from "./components/Newsletter";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const FeaturedPosts = [
    {
      id: "1",
      title: "Link para título da postagem",
    },
    {
      id: "2",
      title: "Link para título da postagem",
    },
    {
      id: "3",
      title: "Link para título da postagem",
    },
  ];

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
        <PostFeatured featuredPosts={FeaturedPosts} />
        <Post />
        <Newsletter />
        <Footer />
      </main>
    </section>
  );
}

export default App;
