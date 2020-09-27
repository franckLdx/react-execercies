import { FunctionComponent } from "react";
import React from 'react';
import { useParamId } from "../../../sharedHooks/hooks";
import { useRecoilValue } from "recoil";
import { usersFamily } from "../../../models/users/model";

export const User: FunctionComponent = () => {
  const userId = useParamId();
  const user = useRecoilValue(usersFamily(userId));

  return <>User {user?.username}</>
}