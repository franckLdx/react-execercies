import React, { FunctionComponent } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { AppOptions } from './AppOptions';
import { useRecoilValue } from 'recoil';
import { isUserLogged } from '../login/data';
import { NavBar } from './navbar/navBar';

export const AppNav: FunctionComponent = () => {
  const isLogged = useRecoilValue(isUserLogged);

  return (
    <Flex borderBottom="2px" padding="5px" marginX="5px">
      <Box flexGrow={1} flexShrink={1}>
        {isLogged && <NavBar />}
      </Box>
      <AppOptions />
    </Flex>
  );
};
