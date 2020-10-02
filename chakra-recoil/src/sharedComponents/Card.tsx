import React, { FunctionComponent, ReactNode } from "react";
import { Heading, Text } from "@chakra-ui/core/dist/";
import { AppDivider } from "./AppDivider";

interface CardProps {
  title: string | ReactNode;
  body?: string | ReactNode;
  footer?: string | ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ title, body, footer }) => (
  <>
    <Heading fontSize="5xl">{title}</Heading>
    <AppDivider marginBottom="8" />
    <Text fontSize="4xl">{body}</Text>
    <AppDivider marginTop="8" />
    <Text fontSize="4xl" textAlign="right">{footer}</Text>
  </>
);
