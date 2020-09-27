import React, { FunctionComponent, ReactNode } from "react";
import { Text } from "@chakra-ui/core/dist/";

interface CardProps {
  title: string | ReactNode;
  body?: string | ReactNode;
  footer?: string | ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ title, body, footer }) => (
  <>
    <Text fontSize="6xl" {...DividerProps} marginBottom="8">{title}</Text>
    <Text fontSize="4xl"{...DividerProps} paddingBottom="20">{body}</Text>
    <Text fontSize="4xl" textAlign="right">{footer}</Text>
  </>
);

const DividerProps = { borderBottomColor: "blue.700", borderBottomWidth: "2px" }