import React, { FunctionComponent } from "react";
import { AppRouter } from "./routes/AppRouter";
import { ErrorBoundary } from "./sharedComponents/ErrorBoudary";
import { customTheme } from "./customTheme";
import { LoadingProvider } from "./sharedComponents/LoadingProvider";
import { RecoilRoot } from "recoil";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import ColorModeProvider from "@chakra-ui/core/dist/ColorModeProvider";
import CSSReset from "@chakra-ui/core/dist/CSSReset";


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
