import React, { FunctionComponent, Suspense } from "react";
import { Loading } from "./Loading";

export const LoadingProvider: FunctionComponent = ({ children }) =>
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>;
