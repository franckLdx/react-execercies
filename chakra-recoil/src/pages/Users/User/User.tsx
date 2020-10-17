import React, { FunctionComponent } from "react";
import { useParamId } from "../../../sharedHooks/hooks";
import { useRecoilValue } from "recoil";
import { Card, CardText } from "../../../sharedComponents/Card";
import { userByIdState } from "../../../state/users";
import Box from "@chakra-ui/core/dist/Box";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  const user = useRecoilValue(userByIdState(userId));

  return (
    <Box padding="4">
      <Card>
        <CardText text={user?.username ?? ''} />
        <CardText text={`Name: ${user?.name}`} />
        <CardText text={`Email: ${user?.email}`} />
      </Card>
    </Box>
  );
}