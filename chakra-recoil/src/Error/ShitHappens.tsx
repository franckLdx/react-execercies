import React, { FunctionComponent } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from "@chakra-ui/core";
import { ExtraBorder } from "../misc/ExtraBorder";

export const ShitHappens: FunctionComponent = () => (
  <ExtraBorder>
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
  </ExtraBorder>
);
