import React, { FunctionComponent } from "react";
import Divider from "@chakra-ui/core/dist/Divider";
import { BoxProps } from "@chakra-ui/core/dist/Box";

export const AppDivider: FunctionComponent<BoxProps> = (props) =>
  <Divider borderBottomColor="app.divider" {...props} />