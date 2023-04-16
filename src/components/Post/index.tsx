import PostCard from "./PostCard";
import { IPosts } from "src/common/interfaces/IPosts";
import postData from "../../data/posts.json";

export default function Post() {
  const data = postData as IPosts;

  return (
    <section className="mx-6 p-6">
      {data.posts.map((post) => {
        return (
          <article key={post.id}>
            <PostCard
              key={post.id}
              date={post.date}
              title={post.title}
              sumary={post.sumary}
            />
          </article>
        );
      })}
    </section>
  );
}
