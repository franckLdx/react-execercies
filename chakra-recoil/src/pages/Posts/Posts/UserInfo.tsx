import React, { FunctionComponent } from "react";
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilValue } from "recoil";
import { usersFamily } from "../../../models/users/model";

interface UserInfoProps {
  userId: number;
}

export const UserInfo: FunctionComponent<UserInfoProps> = ({ userId }) => {
  const user = useRecoilValue(usersFamily(userId));
  return (
    <Text textAlign="right" color="blue.800">
      {user?.username}
    </Text>
  );
};
