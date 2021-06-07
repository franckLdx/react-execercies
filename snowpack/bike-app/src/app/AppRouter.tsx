import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { isUserLogged } from '../login/data';
const Login = React.lazy(() => import('../login'));

export const AppRouter: FunctionComponent = () => {
  const isLogged = useRecoilValue(isUserLogged);
  if (!isLogged) {
    return <Login />;
  }
  return (
    <Switch>
      <Route exact path="/">
        HOME
      </Route>
      <Route path="/foo">FOO</Route>
      <Route path="/bar">BAR</Route>
    </Switch>
  );
};
