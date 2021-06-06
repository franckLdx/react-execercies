import { Flex } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import { useRecoilValue } from 'recoil';
import { Login } from '../login';
import { isUserLogged } from '../login/data';

export const AppRouter: FunctionComponent = () => {
  const isLogged = useRecoilValue(isUserLogged);
  if (!isLogged) {
    return (
      <>
        <Login />
      </>
    );
  }
  return <p>APP</p>;
};
