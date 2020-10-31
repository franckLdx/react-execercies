import React, { FunctionComponent } from "react";
import { AppRouter } from "./routes";
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
      <RecoilRoot>
        <LoadingProvider>
          <AppRouter />
        </LoadingProvider>
      </RecoilRoot>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
