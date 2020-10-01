import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { ExtraBorder } from '../sharedComponents/ExtraBorder';

export const Page: FunctionComponent = ({ children }) => (
  <ExtraBorder>
    <Box backgroundColor="app.mainBackgroundColor" fontWeight="app.normal" color="app.mainColor">
      {children}
    </Box>
  </ExtraBorder>
)
