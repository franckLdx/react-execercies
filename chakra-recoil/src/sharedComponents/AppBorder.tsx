import React, { FunctionComponent } from "react";
import PseudoBox, { PseudoBoxProps } from "@chakra-ui/core/dist/PseudoBox";

export type AppBorderProps = Omit<
  PseudoBoxProps,
  'borderColor' | 'borderWidth' | 'padding'
>;

export const AppBorder: FunctionComponent<AppBorderProps> = ({ children, ...customPseudoBoxProps }) => (
  <PseudoBox {...standardPseudoBoxProps} {...customPseudoBoxProps}>
    {children}
  </PseudoBox >
);

const standardPseudoBoxProps: PseudoBoxProps = {
  borderColor: "app.mainBorder",
  borderWidth: "1px",
  padding: ["0", "1"],
}