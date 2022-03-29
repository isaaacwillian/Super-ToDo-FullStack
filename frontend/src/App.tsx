import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./hooks/usePersistedState";

import GlobalStyle from "./styles/global";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Routes from "./routes";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <GlobalStyle />
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
