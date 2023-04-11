import { IoApps } from "react-icons/io5";
import Logo from "../Logo";
import Menu from "../Menu";
import { useState } from "react";

interface NavbarProps {
  dark: boolean;
}

export default function Navbar({ dark }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <nav
      className={`bg-purple-800 flex justify-between px-3 py-5 rounded-bl-xl rounded-tr-xl cursor-pointer ${
        dark ? "dark" : "light"
      }`}
    >
      <Logo />
      {openMenu ? (
        <Menu open={openMenu} setOpen={handleMenu} dark={dark} />
      ) : (
        <button onClick={handleMenu}>
          <IoApps className="text-2xl" />
        </button>
      )}
    </nav>
  );
}
