import React, { FC } from 'react';

import { Box, Center, Flex } from '@chakra-ui/react';
import { ColorModeButton } from './components/ColorModeButton';
import { Login, ErrorBoundary } from './services';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Box w="100%" h="100%" p={4}>
        <Flex direction="row-reverse">
          <ColorModeButton />
        </Flex>
        <Center w="100%" h="85%" js>
          <Login />
        </Center>
      </Box>
    </ErrorBoundary>
  );
};
