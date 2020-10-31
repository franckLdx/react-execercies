import { Alert, AlertProps, AlertTitle } from "@chakra-ui/core/dist/Alert";
import CircularProgress from "@chakra-ui/core/dist/CircularProgress";
import React, { FunctionComponent } from "react";

export const Loading: FunctionComponent = () => (
  <Alert {...alertProps}>
    <AlertTitle my="3" fontSize="2xl">
      Loading data, pelase wait...
      </AlertTitle>
    <CircularProgress my="6" isIndeterminate color="green"></CircularProgress>
  </Alert>
);

const alertProps: AlertProps = {
  status: "info",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};
