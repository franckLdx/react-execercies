import React, { FunctionComponent } from 'react';
import { Page } from '../../../sharedPages/Page';
import { UsersList } from './UsersList';

export const Users: FunctionComponent = () => {
  return (
    <Page>
      <UsersList />
    </Page>
  );
}