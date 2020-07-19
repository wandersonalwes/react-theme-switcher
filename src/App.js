import React from "react";
import ThemeProvider from "./contexts/theme";

import GlobalStyle from "./styles/global";

import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
