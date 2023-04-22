import Logo from "../Logo";
import { IoClose } from "react-icons/io5";
import MenuItems from "./MenuItems";

interface MenuProps {
  open?: boolean;
  setOpen?: () => void;
  dark?: boolean;
}

export default function Menu({ open, setOpen, dark }: MenuProps) {
  return (
    <section
      className={`w-11/12 h-full rounded-tr-2xl absolute top-0 left-0 z-10 px-3 py-5 md:h-auto md:w-full md:bg-transparent md:fixed  ${
        dark ? "dark" : "light"
      }`}
    >
      <div className="flex justify-between md:hidden">
        <Logo />
        <button onClick={setOpen}>
          <IoClose className="text-3xl" />
        </button>
      </div>
      <MenuItems className="flex flex-col gap-4 text-lg my-6 md:flex-row md:justify-center md:my-0" />
    </section>
  );
}
