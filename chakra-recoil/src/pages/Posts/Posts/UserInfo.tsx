import React, { FunctionComponent, memo } from "react";
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilValue } from "recoil";
import { usersAtom } from "../../../state/user";

interface UserInfoProps {
  userId: number;
}

export const UserInfo: FunctionComponent<UserInfoProps> = memo(({ userId }) => {
  const user = useRecoilValue(usersAtom(userId));
  return (
    <Text textAlign="right" color="app.secondary">
      {user?.username}
    </Text>
  );
});
