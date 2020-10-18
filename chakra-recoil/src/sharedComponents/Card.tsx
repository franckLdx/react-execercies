import { BoxProps } from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import React, { FunctionComponent, memo, useMemo } from "react";
import { AppDivider, AppDividerProps } from "./AppDivider";
import { AppBorder, AppBorderProps } from "./AppBorder";

type CardProps = Pick<AppBorderProps, 'marginTop'>

export const Card: FunctionComponent<CardProps> = memo(({ children, ...extraBorderProps }) => (
  <AppBorder backgroundColor="app.maimBackground" {...extraBorderProps}>
    {children}
  </AppBorder >
));
Card.displayName = "Card";

type Size = 'small' | 'normal' | 'medium';
type CardTextProps = {
  text: string;
  size?: Size
} & Pick<BoxProps, 'textAlign'>

const mapSize: Record<Size, string> = {
  'small': 'xl',
  'normal': '4xl',
  'medium': '5xl',
}

export const CardText: FunctionComponent<CardTextProps> = memo(({ text, size, textAlign }) => {
  const fontSize = useMemo(() => mapSize[size ?? 'normal'], [size]);
  return (
    <Text fontSize={fontSize} textAlign={textAlign}>{text}</Text>
  );
});
CardText.displayName = "CardText";

export type CardDividerProps = Pick<AppDividerProps, 'marginBottom'>;
export const CardDivider: FunctionComponent<CardDividerProps> = ({ marginBottom }) =>
  <AppDivider marginBottom={marginBottom ?? "8"} />;

CardDivider.displayName = "CardDivider";