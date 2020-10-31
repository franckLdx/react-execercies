import React, { FunctionComponent, memo } from 'react';
import { AppHeader } from '../sharedComponents/AppHeader';
import { AppBorder, AppBorderProps } from '../sharedComponents/AppBorder';
import { LoadingProvider } from '../sharedComponents/LoadingProvider';

export const Page: FunctionComponent = memo(({ children }) => (
  <AppBorder id="Page" {...pageProps}>
    <AppHeader />
    <LoadingProvider>
      {children}
    </LoadingProvider>
  </AppBorder>
))

Page.displayName = "Page";

const pageProps: AppBorderProps = {
  color: "app.main",
  fontWeight: "app.normal",
  backgroundColor: "app.mainBackground",
}