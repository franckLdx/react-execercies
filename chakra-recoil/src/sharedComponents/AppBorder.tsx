import React, { FunctionComponent } from "react";
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";

export type AppBorderProps = Omit<
  PseudoBoxProps,
  'borderColor' | 'borderWidth' | 'padding'
>;

export const AppBorder: FunctionComponent<AppBorderProps> = ({ children, ...boxProps }) => (
  <PseudoBox borderColor="app.mainBorder" borderWidth="1px" padding="1" {...boxProps}>
    {children}
  </PseudoBox >
);
