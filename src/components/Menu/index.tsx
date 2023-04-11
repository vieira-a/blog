import { IoClose } from "react-icons/io5";

interface MenuProps {
  open: boolean;
  setOpen: () => void;
}

export default function Menu({ open, setOpen }: MenuProps) {
  return (
    <section className="w-11/12 h-full rounded-tr-2xl absolute top-0 left-0 z-10 p-6 bg-zinc-800 ">
      <div className="text-right">
        <button onClick={setOpen}>
          <IoClose className="text-zinc-200 text-3xl" />
        </button>
      </div>
      <ul className="flex flex-col gap-4 text-xl my-6">
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </section>
  );
}
