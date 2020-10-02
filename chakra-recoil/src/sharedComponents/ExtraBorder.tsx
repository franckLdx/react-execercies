import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/core";

export const ExtraBorder: FunctionComponent = ({ children }) => (
  <Box borderColor="app.mainBorder" borderWidth="1px" padding="1">
    {children}
  </Box>
);
