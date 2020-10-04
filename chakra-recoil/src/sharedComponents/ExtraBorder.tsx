import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import React, { FunctionComponent } from "react";

export type ExtraBorderProps = Pick<BoxProps, 'marginTop' | 'backgroundColor'>;

export const ExtraBorder: FunctionComponent<ExtraBorderProps> = ({ children, ...boxProps }) => (
  <Box borderColor="app.mainBorder" borderWidth="1px" padding="1" {...boxProps}>
    {children}
  </Box>
);
