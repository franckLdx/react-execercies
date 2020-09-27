import React, { FunctionComponent } from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";
import { AppRouter } from "./Routes/AppRouter";
import { ErrorBoundary } from "./sharedComponents/ErrorBoudary";
import { customTheme } from "./customTheme";
import { LoadingProvider } from "./sharedComponents/LoadingProvider";
import { RecoilRoot } from "recoil";


const App: FunctionComponent = () => (
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider>
      <CSSReset />
      <ErrorBoundary>
        <RecoilRoot>
          <LoadingProvider>
            <AppRouter />
          </LoadingProvider>
        </RecoilRoot>
      </ErrorBoundary>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
