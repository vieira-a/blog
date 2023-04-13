import { IoCaretForwardOutline } from "react-icons/io5";

interface PostProps {
  featuredPosts: {
    id: string;
    title: string;
  }[];
}

export default function PostFeatured({ featuredPosts }: PostProps) {
  return (
    <section className="mx-6 mb-8 p-6 bg-zinc-800/25 rounded-tl-2xl rounded-br-2xl border border-zinc-800">
      <h2>Destaques</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {featuredPosts.map((post) => (
          <li key={post.id} className="flex gap-1 items-center">
            <IoCaretForwardOutline className="text-purple-800" />
            <a href="">{post.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
