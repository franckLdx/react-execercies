import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from './store';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => worker.start());
}

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
