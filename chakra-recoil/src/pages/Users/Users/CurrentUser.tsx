import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { AppBorder } from '../../../sharedComponents/AppBorder';
import { currentUserIdAtom } from '../../../state/users/atoms';
import { UserCard } from '../UserCard';

export const CurrentUser: FunctionComponent = () => {
  const userId = useRecoilValue(currentUserIdAtom);
  if (userId === undefined) {
    return <UserBorder />;
  }
  return (
    <UserBorder>
      <UserCard userId={userId} />
    </UserBorder>
  );
};

const UserBorder: FunctionComponent = ({ children }) => <AppBorder width="100%" >{children}</AppBorder>