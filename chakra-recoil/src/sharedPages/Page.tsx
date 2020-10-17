import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { AppHeader } from '../sharedComponents/AppHeader';
import { ExtraBorder } from '../sharedComponents/ExtraBorder';
import { LoadingProvider } from '../sharedComponents/LoadingProvider';

export const Page: FunctionComponent = ({ children }) => (
  <ExtraBorder>
    <Box backgroundColor="app.mainBackground" fontWeight="app.normal" color="app.main">
      <AppHeader />
      <LoadingProvider>
        {children}
      </LoadingProvider>
    </Box>
  </ExtraBorder>
)
