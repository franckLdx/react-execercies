import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ErrorBoundary } from './error/ErrorBoundary';
import { AppTheme } from './theme';
import App from './App';
import { RecoilRoot } from 'recoil';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={AppTheme}>
      <ColorModeScript initialColorMode={AppTheme.config.initialColorMode} />
      <ErrorBoundary>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
