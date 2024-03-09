import React, { FC } from 'react'

import { Text } from '@chakra-ui/layout';
import { useGetUserQuery } from '../../service';

interface UserProps {
  userId: number
}

export const User: FC<UserProps> = ({ userId }) => {
  const { data: user, isLoading, error } = useGetUserQuery(userId);

  if (error) {
    throw error;
  }

  if (isLoading) {
    return <Text fontSize="3xl">Loading...</Text>
  }

  return (
    <Text fontSize="3xl">{user?.userName} ({user?.email})</Text>
  )
}