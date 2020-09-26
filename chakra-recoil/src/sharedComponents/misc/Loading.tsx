import React, { FunctionComponent } from "react";
import { Alert, AlertTitle, CircularProgress } from "@chakra-ui/core";
import { Page } from "./Page";

export const Loading: FunctionComponent = () => (
  <Page>
    <Alert
      status="info"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      <AlertTitle my="3" fontSize="2xl">
        Loading data, pelase wait...
      </AlertTitle>
      <CircularProgress my="6" isIndeterminate color="green"></CircularProgress>
    </Alert>
  </Page>
);
