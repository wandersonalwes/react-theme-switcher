import React from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import * as themes from "./styles/themes";

import GlobalStyle from "./styles/global";

import { ThemeContext } from "./styles/themes/context";

import Header from "./components/Header";
import Article from "./components/Article";

export default function App() {
  const [theme, setTheme] = usePersistedState("theme", themes.dark);
  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />

        <Article />
        <Article />
        <Article />
        <Article />

        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
