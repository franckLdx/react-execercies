import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { QueryClientProvider, QueryClient } from 'react-query';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { worker } = require('./mocks/browser');
  import('./mocks/browser').then(({ worker }) => worker.start());
}

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

