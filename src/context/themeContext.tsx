import React, { ReactNode, createContext, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
  darkMode: true,
  setDarkMode: (darkmode: boolean) => {},
});

export default function ThemeProvider({ children }: ThemeContextProps) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
