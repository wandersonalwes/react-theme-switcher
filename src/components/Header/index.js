import React from "react";
import { useTheme } from "../../styles/themes/context";
import Switch from "react-switch";

import { Container, IconMoon, IconSun } from "./styles";

export default function Header({ toggleTheme }) {
  const theme = useTheme();
  return (
    <Container>
      <h1>React Theme</h1>

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
