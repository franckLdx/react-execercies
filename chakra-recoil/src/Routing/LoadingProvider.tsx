import React, { FunctionComponent, Suspense } from "react";
import {
  CircularProgress,
  Alert,
  AlertTitle,
} from "@chakra-ui/core";
import { ExtraBorder } from "../misc/ExtraBorder";

export const LoadingProvider: FunctionComponent = ({ children }) =>
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>;

const Loading: FunctionComponent = () => (
  <ExtraBorder>
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
  </ExtraBorder>
);
