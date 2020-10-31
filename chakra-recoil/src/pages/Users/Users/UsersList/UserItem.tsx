import React, { FunctionComponent, memo, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { SimpleItem } from "../../../../sharedComponents/SimpleList";
import { userByIdState } from "../../../../state/users";
import { TextItem } from "./TextItem";

interface UserItemProps {
  userId: number;
  isSelected: boolean;
  onSelected(userId: number): void;
}

export const UserItem: FunctionComponent<UserItemProps> = memo(({ userId, isSelected, onSelected }) => {
  const user = useRecoilValue(userByIdState(userId));
  const onMySelected = useCallback(
    () => onSelected(userId),
    [onSelected, userId]
  );
  if (user === undefined) {
    throw new Error(`Can\`t find user ${userId}`);
  }
  return (
    <SimpleItem>
      <TextItem text={user.name} isSelected={isSelected} onSelected={onMySelected} />
    </SimpleItem>
  );
});

UserItem.displayName = "UserItem";
