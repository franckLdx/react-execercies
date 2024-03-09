import React, { FunctionComponent, memo, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Link } from 'react-router-dom';
import { getUserPageUrl } from '../../../routes';
import { CardText } from '../../../sharedComponents/Card';
import { usersFamilyState } from '../../../state';
import { CircularProgress } from '@chakra-ui/core';

interface UserInfoProps {
  userId: number;
}

export const UserInfo: FunctionComponent<UserInfoProps> = memo(({ userId }) => {
  const user = useRecoilValueLoadable(usersFamilyState(userId));
  const userLink = useMemo(() => getUserPageUrl(userId), [userId]);

  switch (user.state) {
    case "loading":
      return <CircularProgress my="6" isIndeterminate color="green" />
    case 'hasError':
      throw user.contents
    case 'hasValue':
      return (
        <Link to={userLink}>
          <CardText text={user.contents.username} textAlign="right" />
        </Link>
      )
  }

});

UserInfo.displayName = "PostInfo";