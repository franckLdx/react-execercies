import React, { FunctionComponent } from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";

export type ExtraBorderProps = Pick<BoxProps, 'display' | 'alignItems' | 'margin' | 'marginTop' | 'marginBottom' | 'backgroundColor'>;

export const ExtraBorder: FunctionComponent<ExtraBorderProps> = ({ children, ...boxProps }) => (
  <Box borderColor="app.mainBorder" borderWidth="1px" padding="1" {...boxProps}>
    {children}
  </Box>
);
