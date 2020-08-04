import React, { FunctionComponent } from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";
import { AppRouter } from "./Routing/AppRouter";
import { ErrorBoundary } from "./Error/ErrorBoudary";
import { customTheme } from "./customTheme";
import { LoadingProvider } from "./Routing/LoadingProvider";

const App: FunctionComponent = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <ColorModeProvider>
      <ErrorBoundary>
        <LoadingProvider>
          <AppRouter />
        </LoadingProvider>
      </ErrorBoundary>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
