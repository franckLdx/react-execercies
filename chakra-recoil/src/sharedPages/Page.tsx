import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { ExtraBorder } from '../sharedComponents/ExtraBorder';

export const Page: FunctionComponent = ({ children }) => (
  <ExtraBorder>
    <Box backgroundColor="app.mainBackground" fontWeight="app.normal" color="app.main">
      {children}
    </Box>
  </ExtraBorder>
)
