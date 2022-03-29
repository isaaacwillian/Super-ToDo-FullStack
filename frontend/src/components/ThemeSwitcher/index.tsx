import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Container } from "./style";

interface Props {
  toggleTheme(): void;
}

export default function ThemeSwitcher({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={15}
        handleDiameter={20}
        onColor="#00012b"
        offColor="#fff"
        offHandleColor="#e1e1e1"
        onHandleColor="#000"
        uncheckedHandleIcon={
          <FaSun style={{ color: "black", width: 20, height: 20 }} />
        }
        checkedHandleIcon={
          <BsFillMoonStarsFill
            style={{ color: "white", width: 14, height: 20 }}
          />
        }
      />
    </Container>
  );
}
