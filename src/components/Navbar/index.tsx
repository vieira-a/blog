import { IoApps } from "react-icons/io5";
import Logo from "../Logo";
import Menu from "../Menu";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  console.log(openMenu);

  return (
    <nav className="bg-purple-800 flex justify-between px-3 py-5 rounded-bl-xl rounded-tr-xl cursor-pointer">
      <Logo />
      {openMenu ? (
        <Menu open={openMenu} setOpen={handleMenu} />
      ) : (
        <button onClick={handleMenu}>
          <IoApps className="text-zinc-900 text-2xl" />
        </button>
      )}
    </nav>
  );
}
