import React, { FunctionComponent } from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";
import { AppRouter } from "./AppRouter";
import { ErrorBoundary } from "./Error/ErrorBoudary";
import { customTheme } from "./customTheme";

const App: FunctionComponent = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <ColorModeProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
