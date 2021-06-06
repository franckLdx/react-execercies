import React, { FunctionComponent, Suspense } from 'react';

import { Background } from '../background';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { AppNav } from './AppNav';

const App: FunctionComponent = () => (
  <Suspense fallback="loading">
    <AppNav />
    <Background>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Background>
  </Suspense>
);

export default App;
