import React, { FunctionComponent, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { Background } from './background';
import { Login } from './login';
import { isUserLogged } from './login/data';

const App: FunctionComponent = () => {
  const isLogged = useRecoilValue(isUserLogged);
  return (
    <Suspense fallback="loading">
      <Background>
        {!isLogged && <Login />}
        {isLogged && 'Welcome'}
      </Background>
    </Suspense>
  );
};

export default App;
