import { IoCaretForwardOutline } from "react-icons/io5";
import Button from "../../Button";
import { IPostsCard } from "src/common/interfaces/IPosts";
import { Link } from "react-router-dom";

export default function PostCard({
  id,
  date,
  title,
  sumary,
  slug,
}: IPostsCard) {
  return (
    <div className="flex flex-col gap-4 py-4 md:w-[600px] mx-auto">
      <p>{date}</p>
      <h2>
        <Link to={`/post/${slug}`}>{title}</Link>
      </h2>
      <p>{sumary}</p>
      <Button className="flex gap-1 items-center">
        <Link to={`/post/${slug}`} className="text-purple-800">
          Veja mais
        </Link>
        <IoCaretForwardOutline className="text-purple-800" />
      </Button>
    </div>
  );
}
