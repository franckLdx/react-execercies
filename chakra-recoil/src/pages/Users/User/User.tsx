import React, { FunctionComponent } from "react";
import { useParamId } from "../../../sharedHooks/hooks";
import { useRecoilValue } from "recoil";
import { Card, CardText } from "../../../sharedComponents/Card";
import { userByIdState } from "../../../state/users";
import { UserCard } from "../UserCard";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  return <UserCard userId={userId} />
}