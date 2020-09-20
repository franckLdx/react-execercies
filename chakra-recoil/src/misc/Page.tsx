import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { ExtraBorder } from './ExtraBorder';

export const Page: FunctionComponent = ({ children }) => (
  <ExtraBorder>
    <Box backgroundColor="blue.100" fontWeight="500" color="blue.700">
      {children}
    </Box>
  </ExtraBorder>
)
