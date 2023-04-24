import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";
import { IoApps } from "react-icons/io5";
import { NavbarProps } from "src/common/interfaces/INavbar";
import Logo from "../Logo";
import MenuItems from "../Menu/MenuItems";

export default function Navbar({ dark }: NavbarProps) {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <nav
      className={`bg-purple-800 flex justify-between px-3 py-5 rounded-bl-xl rounded-tr-xl cursor-pointer md:w-full relative md:fixed
      ${dark ? "dark" : "light"}`}
    >
      <Logo />
      <div className="invisible md:visible">
        <MenuItems className="flex gap-4 text-lg md:flex-row" />
      </div>
      {!openMenu && (
        <button
          onClick={() => setOpenMenu(true)}
          className="visible md:invisible"
        >
          <IoApps className="text-2xl" />
        </button>
      )}
    </nav>
  );
}
