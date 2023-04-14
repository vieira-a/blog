import { IoCaretForwardOutline } from "react-icons/io5";
import Button from "../../Button";

export default function PostCard() {
  return (
    <article className="flex flex-col gap-4">
      <p>10 de abril de 2023</p>
      <h2>Título do Post</h2>
      <p>
        Trecho inicial do post que pode ter até 3 parágrafos. A ideia é
        funcionar como uma espécie de subtítulo chamativo
      </p>
      <Button className="flex gap-1 items-center">
        <a className="text-purple-800" href="#">
          Veja mais
        </a>
        <IoCaretForwardOutline className="text-purple-800" />
      </Button>
    </article>
  );
}
