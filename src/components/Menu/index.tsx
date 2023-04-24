import { MenuContext } from "../../context/menuContext";
import { useContext } from "react";
import Logo from "../Logo";
import { IoClose } from "react-icons/io5";
import MenuItems from "./MenuItems";

export default function Menu() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  console.log(openMenu);

  return (
    <>
      {openMenu && (
        <section className="absolute top-0 left-0 px-3 py-5 w-11/12 h-full bg-inherit md:w-full md:h-6 md:bg-transparent">
          <div className="flex justify-between">
            <button
              onClick={() => setOpenMenu(false)}
              className="visible md:invisible"
            >
              <IoClose className="text-3xl" />
            </button>
          </div>
          <div>
            <MenuItems className="flex flex-col gap-4 text-lg my-6 md:flex-row md:justify-center" />
          </div>
        </section>
      )}
    </>
  );
}
