import { BoxProps } from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import React, { FunctionComponent, memo, useMemo } from "react";
import { AppDivider, AppDividerProps } from "./AppDivider";
import { ExtraBorder, ExtraBorderProps } from "./ExtraBorder";

type CardProps = Pick<ExtraBorderProps, 'marginTop'>

export const Card: FunctionComponent<CardProps> = memo(({ children, ...extraBorderProps }) => (
  <ExtraBorder backgroundColor="app.secondaryBackground" {...extraBorderProps}>
    {children}
  </ExtraBorder >
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