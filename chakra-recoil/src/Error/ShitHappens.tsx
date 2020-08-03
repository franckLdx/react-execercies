import React, { FunctionComponent } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Box,
} from "@chakra-ui/core";

export const ShitHappens: FunctionComponent = () => (
  <Box borderColor="black" borderWidth="1px" padding="1" marginX="2">
    <Alert
      status="error"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon />
      <AlertTitle mt="3">Oups, Error!</AlertTitle>
      <AlertDescription mt="5">
        Sorry, Something wrong Happen.
        <Text mt="2">You should relod the app.</Text>
      </AlertDescription>
    </Alert>
  </Box>
);
