import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./templates/Main";

const token = {
  blue: "#2750c5",
  aqua: "#314e55",
};

const Theme = {
  Header: {
    bgColor: token.aqua,
    padding: "5px 10px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
