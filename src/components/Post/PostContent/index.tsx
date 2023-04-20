import { useParams } from "react-router-dom";
import postData from "../../../data/posts.json";
import { IPosts } from "src/common/interfaces/IPosts";

export default function PostContent() {
  const data = postData as IPosts;
  const { id } = useParams();
  const postId = Number(id);

  return (
    <section>
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
