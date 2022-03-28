import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Login from "./pages/Login";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
