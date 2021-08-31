import React, { FC } from 'react';

import { Box, Center, Flex } from '@chakra-ui/react';
import { ColorModeButton } from './components/ColorModeButton';
import { Login } from './services/users/Login';

export const App: FC = () => {
  return (
    <>
      <Box w="100%" h="100%" p={4}>
        <Flex direction="row-reverse">
          <ColorModeButton />
        </Flex>
        <Center w="100%" h="100%">
          <Login />
        </Center>
      </Box>
    </>
  );
};
