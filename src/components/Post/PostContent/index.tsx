import { useParams } from "react-router-dom";
import postData from "../../../data/posts.json";
import { IPosts } from "src/common/interfaces/IPosts";
import Navbar from "../../Navbar";
import { useState } from "react";

export default function PostContent() {
  const data = postData as IPosts;
  const { id } = useParams();
  const postId = Number(id);

  const [darkMode, setDarkMode] = useState<boolean>(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <section className={`${darkMode ? "dark" : "light"}`}>
      <Navbar dark={darkMode} />
      <div className="text-right p-6">
        {data.posts.map(
          (post) =>
            post.id === postId && (
              <div key={post.id}>
                <p>{post.date}</p>
                <h2>{post.title}</h2>
                <div>
                  <h4>{post.sumary}</h4>
                  <p>{post.content}</p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
