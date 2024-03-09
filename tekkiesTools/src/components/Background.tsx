import React, { FunctionComponent } from 'react';

import { Box } from '@chakra-ui/react';

export const Background: FunctionComponent = ({ children }) => {
  return (
    <Box
      id="image"
      height="300px"
      width="300px"
      backgroundImage="url('img/expert-icon-dev.svg')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      p={0}
    >
      {children}
    </Box>
  );
};
