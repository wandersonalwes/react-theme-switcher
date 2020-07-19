import React from "react";
import { useTheme } from "../../hooks";
import Switch from "react-switch";

import { Container, IconMoon, IconSun } from "./styles";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <h1>React Theme Switcher</h1>

      <Switch
        checked={theme.title === "dark"}
        onChange={toggleTheme}
        checkedIcon={<IconMoon />}
        onColor="#333"
        offColor="#fff"
        uncheckedIcon={<IconSun />}
        offHandleColor={theme.colors.secondary}
        onHandleColor={theme.colors.secondary}
      />
    </Container>
  );
}

