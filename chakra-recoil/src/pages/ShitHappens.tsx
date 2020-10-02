import React, { FunctionComponent } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/core/dist/Alert";
import Text from "@chakra-ui/core/dist/Text";
import { Page } from "../sharedPages/Page";

export const ShitHappens: FunctionComponent = () => (
  <Page>
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
  </Page>
);
