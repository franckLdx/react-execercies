import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './error/ErrorBoundary';
import { store } from './store';
import { AppTheme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={AppTheme}>
      <Provider store={store}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </ErrorBoundary>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
