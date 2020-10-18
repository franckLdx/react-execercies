import React, { FunctionComponent } from 'react';
import { PseudoBoxProps } from '@chakra-ui/core';
import { AppBorder } from '../AppBorder';

export const SimpleItem: FunctionComponent = ({ children }) => {
  return (
    <AppBorder marginBottom="1" {...Props}>
      {children}
    </AppBorder >
  )
};
SimpleItem.displayName = "SimpleItem";

const Props: PseudoBoxProps = {
  cursor: "pointer",
  rounded: "app.normal",
  fontSize: "app.normal",
  fontWeight: "app.medium",
  _hover: {
    color: "app.secondary",
    fontWeight: "app.bold",
    backgroundColor: "app.thirdBackground",
  },
}