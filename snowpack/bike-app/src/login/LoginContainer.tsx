import React, { FunctionComponent, memo } from 'react';

import { Center, Box } from '@chakra-ui/react';

export const LoginContainer: FunctionComponent = memo(({ children }) => (
  <Center height="95%" data-testId="LoginScreen">
    <Box
      p={2}
      width="full"
      maxWidth="800px"
      borderWidth={3}
      borderRadius={8}
      boxShadow="lg"
      opacity="0.95"
      backgroundColor="white"
    >
      {children}
    </Box>
  </Center>
));

LoginContainer.displayName = 'LoginContainer';
