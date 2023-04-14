import { IoCaretForwardOutline } from "react-icons/io5";
import Button from "src/components/Button";

export default function PostCard() {
  return (
    <article>
      <p>10 de abril de 2023</p>
      <h2>Título do Post</h2>
      <p>
        Trecho inicial do post que pode ter até 3 parágrafos. A ideia é
        funcionar como uma espécie de subtítulo chamativo
      </p>
      <Button className="flex gap-1 items-center">
        <a href="#">Veja mais</a>
        <IoCaretForwardOutline className="text-purple-800" />
      </Button>
    </article>
  );
}
