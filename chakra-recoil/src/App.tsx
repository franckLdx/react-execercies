import React, { FunctionComponent } from "react";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { AppRouter } from "./AppRouter";

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <AppRouter />
  </ThemeProvider>
);

export default App;
