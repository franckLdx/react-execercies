import React, { FC } from 'react'

import { Text } from '@chakra-ui/layout';
import { useUserById } from '../../service/placeHolder/users';

interface UserProps {
  userId: number
}

export const User: FC<UserProps> = ({ userId }) => {
  const { status, data: user, error } = useUserById(userId);

  if (error) {
    throw error;
  }

  if (status === 'loading') {
    return <Text fontSize="3xl">Loading...</Text>
  }

  return (
    <Text fontSize="3xl">{user?.userName} ({user?.email})</Text>
  )
}