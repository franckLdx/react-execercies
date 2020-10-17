import React, { FunctionComponent, memo } from "react";
import Text from "@chakra-ui/core/dist/Text";
import { userById } from "../../../state/users";
import { useRecoilValue } from "recoil";

interface UserInfoProps {
  userId: number;
}

export const UserInfo: FunctionComponent<UserInfoProps> = memo(({ userId }) => {
  const user = useRecoilValue(userById(userId));
  return (
    <Text textAlign="right" color="app.secondary">
      {user?.username}
    </Text>
  );
});
UserInfo.displayName = 'userInfo'