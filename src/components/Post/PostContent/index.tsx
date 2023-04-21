import { useParams } from "react-router-dom";
import postData from "../../../data/posts.json";
import { IPosts } from "src/common/interfaces/IPosts";
import Markdown from "markdown-to-jsx";

export default function PostContent() {
  const data = postData as IPosts;
  const { slug } = useParams();

  return (
    <section className="w-full h-full pb-6">
      <div className="p-6">
        {data.posts.map(
          (post) =>
            post.slug === slug && (
              <div key={post.id} className="flex flex-col gap-6">
                <p>{post.date}</p>
                <h2 className="font-bold">{post.title}</h2>
                <div className="flex flex-col gap-6">
                  <h4 className="font-semibold">{post.sumary}</h4>
                  <p>
                    <Markdown>{post.content}</Markdown>
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
