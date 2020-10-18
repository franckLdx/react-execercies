import React, { FunctionComponent, memo, useCallback, useMemo } from 'react';
import Text from '@chakra-ui/core/dist/Text';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userByIdState, usersState } from '../../../state/users';
import { currentUserAtom } from '../../../state/users/atoms';
import { SimpleItem, SipmleList } from '../../../sharedComponents/SimpleList';

export const UsersList: FunctionComponent = () => {
  const users = useRecoilValue(usersState);
  return (
    <SipmleList>
      {users.map(user => <UserItem key={user.id} userId={user.id} />)}
    </SipmleList>
  );
}

interface UserItemProps {
  userId: number;
}
const UserItem: FunctionComponent<UserItemProps> = ({ userId }) => {
  const user = useRecoilValue(userByIdState(userId));
  const [selectedUserId, setSelected] = useRecoilState(currentUserAtom);
  const isSelelected = useMemo(() => selectedUserId === userId, [selectedUserId, userId]);
  const onSelected = useCallback(
    () => setSelected(userId),
    [setSelected, userId]
  );
  const UserItem = memo(() => <Text onClick={onSelected}>{isSelelected ? "YES" : "NO"} - {user?.name}</Text >);
  UserItem.displayName = "UserItem";
  return (
    <SimpleItem>
      <UserItem />
    </SimpleItem>
  );
}
