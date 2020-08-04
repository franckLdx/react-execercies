import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/core";

export const ExtraBorder: FunctionComponent = ({ children }) => (
  <Box borderColor="black" borderWidth="1px" padding="1" marginX="2">
    {children}
  </Box>
);
