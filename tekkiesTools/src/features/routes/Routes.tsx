import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Login, selectIsLogged } from '..';
import { HOME_URL, LOGIN_URL } from './urls';

export const Routes: FC = () => {
  const isLogged = useSelector(selectIsLogged);
  const matchLogin = useRouteMatch({
    path: LOGIN_URL,
  });

  if (!isLogged && !matchLogin) {
    return <Redirect push to={LOGIN_URL} />;
  }

  return (
    <Switch>
      <Route path={LOGIN_URL}>
        <Login />
      </Route>
      <Route exact={true} path={HOME_URL}>
        HELLO
      </Route>
      <Redirect to={HOME_URL} />
    </Switch>
  );
};
