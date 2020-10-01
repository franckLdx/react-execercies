import React, { FunctionComponent } from "react";
import { useParamId } from "../../../sharedHooks/hooks";
import { useRecoilValue } from "recoil";
import { usersFamily } from "../../../models/users/model";
import { Card } from "../../../sharedComponents/Card";
import { Page } from "../../../sharedPages/Page";
import Text from "@chakra-ui/core/dist/Text";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  const user = useRecoilValue(usersFamily(userId));

  return (
    <Page>
      <Card
        title={user?.username}
        body={
          <>
            <Text>Name: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
          </>
        }
      />
    </Page>
  );
}