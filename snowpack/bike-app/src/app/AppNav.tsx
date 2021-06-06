import React, { FunctionComponent } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { AppOptions } from './AppOptions';
import { useRecoilValue } from 'recoil';
import { isUserLogged } from '../login';

export const AppNav: FunctionComponent = () => {
  const isLogged = useRecoilValue(isUserLogged);

  return (
    <Flex borderBottom="2px" padding="5px">
      <Box flexGrow={1} flexShrink={1}>
        {isLogged && 'NAVIGATION'}
      </Box>
      <AppOptions />
    </Flex>
  );
};
