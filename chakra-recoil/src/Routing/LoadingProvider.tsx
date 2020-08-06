import React, { FunctionComponent, Suspense } from "react";
import { Loading } from "../misc/Loading";

export const LoadingProvider: FunctionComponent = ({ children }) =>
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>;
