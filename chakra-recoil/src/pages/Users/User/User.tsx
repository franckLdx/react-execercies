import { FunctionComponent } from "react";
import React from 'react';
import { useParams } from "react-router-dom";

export const User: FunctionComponent = () => {
  const { id } = useParams<any>();
  return <>User {id}</>
}