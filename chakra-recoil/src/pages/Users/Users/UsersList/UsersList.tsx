import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SipmleList, SipmleListProps } from '../../../../sharedComponents/SimpleList';
import { usersState } from '../../../../state/users';
import { currentUserIdAtom } from '../../../../state/users/atoms';
import { UserItem } from './UserItem';

type UsersListProps = SipmleListProps;

export const UsersList: FunctionComponent<UsersListProps> = (sipmleListProps) => {
  const users = useRecoilValue(usersState);
  const [selectedUserId, setSelected] = useRecoilState(currentUserIdAtom);
  const onSelected = useCallback(
    (userId: number) => setSelected(userId),
    [setSelected]
  );
  useEffect(
    () => {
      if (selectedUserId === undefined && users.length > 0) {
        setSelected(users[0].id);
      }
    },
    [selectedUserId, setSelected, users]
  );
  return (
    <SipmleList {...sipmleListProps}>
      {
        users.map(({ id }) =>
          <UserItem
            key={id}
            userId={id}
            isSelected={id === selectedUserId}
            onSelected={onSelected}
          />)
      }
    </SipmleList>
  );
}