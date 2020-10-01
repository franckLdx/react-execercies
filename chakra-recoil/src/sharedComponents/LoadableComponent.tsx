import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { LoadingState } from '../state/loadingState';
import { Loading } from './Loading';

interface LoadableProps {
  loadingState: LoadingState;
  loadingError: Error | undefined
}

export const LoadableComponent: FunctionComponent<LoadableProps> = ({ loadingState, loadingError, children }) => {
  const component = useMemo<ReactNode>(() => {
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

  return <>{component}</>;
}