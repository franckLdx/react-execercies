import React, { FunctionComponent, useCallback } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SipmleList } from '../../../../sharedComponents/SimpleList';
import { usersState } from '../../../../state/users';
import { currentUserAtom } from '../../../../state/users/atoms';
import { UserItem } from './UserItem';

export const UsersList: FunctionComponent = () => {
  const users = useRecoilValue(usersState);
  const [selectedUserId, setSelected] = useRecoilState(currentUserAtom);
  const onSelected = useCallback(
    (userId: number) => setSelected(userId),
    [setSelected]
  );
  return (
    <SipmleList>
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
