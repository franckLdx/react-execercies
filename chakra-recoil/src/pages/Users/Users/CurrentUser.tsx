import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { AppBorder } from '../../../sharedComponents/AppBorder';
import { currentUserIdState } from '../../../state/users/atoms';
import { UserCard } from '../UserCard';

export const CurrentUser: FunctionComponent = () => {
  const userId = useRecoilValue(currentUserIdState);
  return (
    <UserBorder>
      {userId !== undefined && <UserCard userId={userId} />}
    </UserBorder>
  );
};

CurrentUser.displayName = 'CurrentUser';

const UserBorder: FunctionComponent = ({ children }) => <AppBorder width="100%" >{children}</AppBorder>