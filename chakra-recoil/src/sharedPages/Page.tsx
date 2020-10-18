import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/core';
import { AppHeader } from '../sharedComponents/AppHeader';
import { ExtraBorder, ExtraBorderProps } from '../sharedComponents/ExtraBorder';
import { LoadingProvider } from '../sharedComponents/LoadingProvider';

export const Page: FunctionComponent = ({ children }) => (
  <ExtraBorder id="Page" {...pageProps}>
    <Box>
      <AppHeader />
      <LoadingProvider>
        {children}
      </LoadingProvider>
    </Box>
  </ExtraBorder>
)
Page.displayName = "Page";

const pageProps: ExtraBorderProps = {
  color: "app.main",
  fontWeight: "app.normal",
  backgroundColor: "app.mainBackground",
}