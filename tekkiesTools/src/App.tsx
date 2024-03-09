import React, { FC } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { ColorModeButton } from './components/ColorModeButton';
import { ErrorBoundary } from './features';
import { Routes } from './features/routes/Routes';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Box w="100%" h="100%" p={4}>
        <Flex direction="row-reverse">
          <ColorModeButton />
        </Flex>
        <Box w="100%" h="85%" js>
          <Routes />
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
