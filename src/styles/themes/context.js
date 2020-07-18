import { createContext, useContext } from "react";

import dark from "./dark";

export const ThemeContext = createContext({ theme: dark });

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return theme;
}
