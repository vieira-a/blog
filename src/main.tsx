import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import ThemeProvider from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
