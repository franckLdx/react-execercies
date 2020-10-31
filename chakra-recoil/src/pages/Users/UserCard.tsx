import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { Card, CardDivider, CardText } from '../../sharedComponents/Card';
import { userByIdState } from '../../state/users';

interface UserCardProps {
  userId: number;
}

export const UserCard: FunctionComponent<UserCardProps> = ({ userId }) => {
  const user = useRecoilValue(userByIdState(userId));
  if (user === undefined) {
    throw new Error(`Can\`t find user ${userId}`);
  }
  return (
    <Box padding="4">
      <Card>
        <CardText text={user.username} size="medium" />
        <CardDivider />
        <CardText text={`Name: ${user.name}`} />
        <CardText text={`Email: ${user.email}`} />
      </Card>
    </Box>
  )
}