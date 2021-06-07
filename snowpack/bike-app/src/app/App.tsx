import React, { FunctionComponent, Suspense } from 'react';

import { Background } from './Background';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { AppNav } from './AppNav';

const App: FunctionComponent = () => (
  <Suspense fallback="loading">
    <BrowserRouter>
      <AppNav />
      <Background>
        <AppRouter />
      </Background>
    </BrowserRouter>
  </Suspense>
);

export default App;
