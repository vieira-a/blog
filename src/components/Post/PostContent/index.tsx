import { useParams } from "react-router-dom";
import postData from "../../../data/posts.json";
import { IPosts } from "src/common/interfaces/IPosts";

export default function PostContent() {
  const data = postData as IPosts;
  const { slug } = useParams();

  return (
    <section className="w-full h-screen">
      <div className="p-6">
        {data.posts.map(
          (post) =>
            post.slug === slug && (
              <div key={post.id} className="flex flex-col gap-6">
                <p>{post.date}</p>
                <h2>{post.title}</h2>
                <div className="flex flex-col gap-6">
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
