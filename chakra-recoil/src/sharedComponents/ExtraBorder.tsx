import Box from "@chakra-ui/core/dist/Box";
import React, { FunctionComponent } from "react";

export const ExtraBorder: FunctionComponent = ({ children }) => (
  <Box borderColor="app.mainBorder" borderWidth="1px" padding="1">
    {children}
  </Box>
);
