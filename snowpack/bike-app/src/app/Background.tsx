import React, { FunctionComponent } from 'react';

import { Box } from '@chakra-ui/react';

export const Background: FunctionComponent = ({ children }) => {
  return (
    <Box
      id="image"
      height="90%"
      width="full"
      backgroundImage="url('image-velo-oribiky.png')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      p={0}
    >
      {children}
    </Box>
  );
};
