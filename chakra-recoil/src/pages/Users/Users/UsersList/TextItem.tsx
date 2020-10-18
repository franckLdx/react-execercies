import React from 'react';
import Text from '@chakra-ui/core/dist/Text';
import { FunctionComponent } from 'react';

interface TextItem {
  text: string;
  isSelected: boolean;
  onSelected(): void;
}

export const TextItem: FunctionComponent<TextItem> =
  ({ text, isSelected, onSelected }) =>
    <Text
      as={isSelected ? "u" : undefined}
      fontWeight={isSelected ? "app.bold" : undefined}
      onClick={onSelected}
    >
      {text}
    </Text >

TextItem.displayName = "TextItem";