import React, { FunctionComponent } from 'react';
import { ExtraBorder } from '../ExtraBorder';

export const SipmleList: FunctionComponent = ({ children }) => (
  <ExtraBorder width="2xs" height="100%" overflow="auto">
    {children}
  </ExtraBorder>
);