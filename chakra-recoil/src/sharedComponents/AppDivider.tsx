import React, { FunctionComponent } from "react";
import Divider from "@chakra-ui/core/dist/Divider";
import { BoxProps } from "@chakra-ui/core/dist/Box";

export type AppDividerProps = BoxProps;

export const AppDivider: FunctionComponent<AppDividerProps> = (props) =>
  <Divider borderBottomColor="app.divider" {...props} />