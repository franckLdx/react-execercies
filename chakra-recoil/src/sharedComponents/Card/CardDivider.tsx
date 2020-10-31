import React, { FunctionComponent } from "react";
import { AppDivider, AppDividerProps } from "../AppDivider";

export type CardDividerProps = Pick<AppDividerProps, 'marginBottom'>;

export const CardDivider: FunctionComponent<CardDividerProps> = ({ marginBottom }) =>
  <AppDivider marginBottom={marginBottom ?? "8"} />;

CardDivider.displayName = "CardDivider";