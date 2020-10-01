import React, { FunctionComponent } from "react";
import Divider from "@chakra-ui/core/dist/Divider";
import { BoxProps } from "@chakra-ui/core";

export const AppDivider: FunctionComponent<BoxProps> = (props) => <Divider borderBottomColor="app.divider" {...props} />