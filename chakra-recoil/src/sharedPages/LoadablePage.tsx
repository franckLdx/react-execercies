import React, { FunctionComponent, useMemo } from 'react';
import { LoadingState } from '../models/loadingState';
import { Loading } from '../sharedComponents/Loading';
import { Page } from './Page';

interface LoadableProps {
  loadingState: LoadingState;
  loadingError: Error | undefined
}

export const LoadablePage: FunctionComponent<LoadableProps> = ({ loadingState, loadingError, children }) => {
  const Component = useMemo(() => {
    switch (loadingState) {
      case 'none':
      case 'loading':
        return <Loading />;
      case 'loaded':
        return children;
      case 'error':
        throw loadingError;
    }
  }, [children, loadingError, loadingState]);

  return (
    <Page>
      {Component}
    </Page>
  )
}