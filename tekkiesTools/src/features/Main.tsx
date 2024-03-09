import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN_URL } from './routes';
import { selectRole } from './users';
import { Advisor } from './users/advisor';

export const Main: FC = () => {
  const role = useSelector(selectRole);
  switch (role) {
    case 'advisor':
      return <Advisor />;
    case 'admin':
      return <p>Administrator</p>;
    default:
      return <Redirect to={LOGIN_URL} />;
  }
};
