import React, { FunctionComponent } from "react";
import { useParamId } from "../../../sharedHooks/hooks";
import { UserCard } from "../UserCard";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  return <UserCard userId={userId} />
}