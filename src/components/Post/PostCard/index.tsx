import { IoCaretForwardOutline } from "react-icons/io5";
import Button from "../../Button";
import { IPostsCard } from "src/common/interfaces/IPosts";
import Markdown from "markdown-to-jsx";

export default function PostCard({ date, title, sumary }: IPostsCard) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{sumary}</p>
      <Button className="flex gap-1 items-center">
        <a className="text-purple-800" href="#">
          Veja mais
        </a>
        <IoCaretForwardOutline className="text-purple-800" />
      </Button>
    </div>
  );
}
