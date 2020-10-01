import React, { FunctionComponent } from 'react';
import { LoadingState } from '../state/loadingState';
import { LoadableComponent } from '../sharedComponents/LoadableComponent';
import { Page } from './Page';

interface LoadableProps {
  loadingState: LoadingState;
  loadingError: Error | undefined
}

export const LoadablePage: FunctionComponent<LoadableProps> = ({ children, ...props }) => {
  return (
    <Page>
      <LoadableComponent {...props} >{children}</LoadableComponent>
    </Page>
  )
}