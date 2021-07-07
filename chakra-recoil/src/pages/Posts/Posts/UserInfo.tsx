import React, { FunctionComponent, memo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { usersFamilyState } from '../../../state';
import { CircularProgress } from '@chakra-ui/core';
import Text from "@chakra-ui/core/dist/Text";

interface UserInfoProps {
  userId: number;
}

export const UserInfo: FunctionComponent<UserInfoProps> = memo(({ userId }) => {
  const user = useRecoilValueLoadable(usersFamilyState(userId));

  switch (user.state) {
    case "loading":
      return <CircularProgress size="md" isIndeterminate color="green" />
    case 'hasError':
      throw user.contents
    case 'hasValue':
      return (
        <Text textAlign="right" color="app.secondary">
          {user.contents.username}
        </Text>
      )
  }
});

UserInfo.displayName = "PostInfo";