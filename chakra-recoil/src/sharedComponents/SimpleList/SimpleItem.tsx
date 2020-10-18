import React, { FunctionComponent } from 'react';
import { PseudoBoxProps } from '@chakra-ui/core';
import { ExtraBorder } from '../ExtraBorder';

export const SimpleItem: FunctionComponent = ({ children }) => {
  return (
    <ExtraBorder marginBottom="1" {...Props}>
      {children}
    </ExtraBorder >
  )
};

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