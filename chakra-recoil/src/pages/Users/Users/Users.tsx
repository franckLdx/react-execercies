import React, { FunctionComponent } from 'react';
import Box from '@chakra-ui/core/dist/Box';
import { Page } from '../../../sharedPages/Page';
import { CurrentUser } from './CurrentUser';
import { UsersList } from './UsersList';

export const Users: FunctionComponent = () => {
  return (
    <Page>
      <Box display="flex">
        <UsersList marginRight="3" />
        <CurrentUser />
      </Box>
    </Page>
  );
}