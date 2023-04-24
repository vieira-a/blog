import { IoApps } from "react-icons/io5";
import { useState } from "react";
import { NavbarProps } from "src/common/interfaces/INavbar";
import Logo from "../Logo";
import Menu from "../Menu";
import { Link } from "react-router-dom";

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
    <>
      <nav
        className={`bg-purple-800 flex justify-between px-3 py-5 rounded-bl-xl rounded-tr-xl cursor-pointer md:fixed md:w-full
      ${dark ? "dark" : "light"}`}
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
    </>
  );
}
