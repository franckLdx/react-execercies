import React, { FunctionComponent } from 'react';
import { AppBorder, AppBorderProps } from '../AppBorder';

export type SipmleListProps = AppBorderProps;

export const SipmleList: FunctionComponent<SipmleListProps> = ({ children, ...appBorderProps }) => (
  <AppBorder width="2xs" height="100%" overflow="auto" {...appBorderProps}>
    {children}
  </AppBorder>
);