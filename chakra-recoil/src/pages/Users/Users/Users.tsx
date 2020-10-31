import React, { FunctionComponent } from 'react';
import Box from '@chakra-ui/core/dist/Box';
import { Page } from '../../../sharedPages/Page';
import { CurrentUser } from './CurrentUser';
import { UsersList } from './UsersList';
import { UsersListProps } from './UsersList/UsersList';

const minimizedSize = "2em";
const displayedSize = "16em";

export const Users: FunctionComponent = () => {
  return (
    <Page>
      <Box display="flex">
        <UsersList {...usersListProps} />
        <CurrentUser />
      </Box>
    </Page>
  );
}

const usersListProps: UsersListProps = {
  minWidth: [minimizedSize, displayedSize],
  _hover: {
    minWidth: displayedSize
  },
  marginRight: "3",
}