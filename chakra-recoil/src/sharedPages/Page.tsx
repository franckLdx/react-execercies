import React, { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/core';
import { AppHeader } from '../sharedComponents/AppHeader';
import { AppBorder, AppBorderProps } from '../sharedComponents/AppBorder';
import { LoadingProvider } from '../sharedComponents/LoadingProvider';

export const Page: FunctionComponent = ({ children }) => (
  <AppBorder id="Page" {...pageProps}>
    <Box>
      <AppHeader />
      <LoadingProvider>
        {children}
      </LoadingProvider>
    </Box>
  </AppBorder>
)
Page.displayName = "Page";

const pageProps: AppBorderProps = {
  color: "app.main",
  fontWeight: "app.normal",
  backgroundColor: "app.mainBackground",
}