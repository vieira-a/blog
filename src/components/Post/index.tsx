import PostCard from "./PostCard";
import { IPosts } from "src/common/interfaces/IPosts";
import postData from "../../data/posts.json";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Post() {
  const data = postData as IPosts;
  const lastPosts = data.posts
    .slice(data.posts.length - 5, data.posts.length)
    .reverse();

  return (
    <>
      <section className="mx-6 mb-8 p-6 bg-zinc-800/25 rounded-tl-2xl rounded-br-2xl border border-zinc-800">
        <h2>Destaques</h2>
        <ul className="flex flex-col gap-4 mt-4">
          {data.posts.map(
            (featuredPost) =>
              featuredPost.featured && (
                <li key={featuredPost.id} className="flex gap-1 items-center">
                  <IoCaretForwardOutline className="text-purple-800" />
                  <Link to={`/post/${featuredPost.id}`}>
                    {featuredPost.title}
                  </Link>
                </li>
              )
          )}
        </ul>
      </section>
      <section className="mx-6 p-6">
        {lastPosts.map((post) => {
          return (
            <article key={post.id}>
              <PostCard
                id={post.id}
                date={post.date}
                title={post.title}
                sumary={post.sumary}
                slug={post.slug}
              />
            </article>
          );
        })}
      </section>
    </>
  );
}
