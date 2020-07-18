import styled, { css } from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  h1 {
    color: ${props => props.theme.colors.color};
  }
`;

const iconCSS = css`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;
  color: ${props => props.theme.colors.secondary};
`;

export const IconSun = styled(FiSun)`
  ${iconCSS}
`;
export const IconMoon = styled(FiMoon)`
  ${iconCSS}
`;
