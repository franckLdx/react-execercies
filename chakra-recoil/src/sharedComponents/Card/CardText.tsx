import { BoxProps } from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import React, { FunctionComponent, memo, useMemo } from "react";

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
