import React, { FunctionComponent } from "react";
import { useParamId } from "../../../sharedHooks/hooks";
import { useRecoilValue } from "recoil";
import { usersAtom } from "../../../state/user";
import { Card, CardText } from "../../../sharedComponents/Card";
import { Page } from "../../../sharedPages/Page";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  const user = useRecoilValue(usersAtom(userId));

  return (
    <Page>
      <Card>
        <CardText text={user?.username ?? ''} />
        <CardText text={`Name: ${user?.name}`} />
        <CardText text={`Email: ${user?.email}`} />
      </Card>
    </Page>
  );
}