import { ReactNode, createContext, useState } from "react";

interface MenuContextProps {
  children: ReactNode;
}

export const MenuContext = createContext({
  openMenu: false,
  setOpenMenu: (openMenu: boolean) => {},
});

export default function MenuProvider({ children }: MenuContextProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
