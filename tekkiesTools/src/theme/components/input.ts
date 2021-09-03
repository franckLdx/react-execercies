import { ComponentSingleStyleConfig, CSSObject } from '@chakra-ui/react';

export const placeholderInputTheme: CSSObject = {
  fontSize: '1.05em',
  fontWeight: 'bold',
  color: 'gray.400',
};

export const borderInputTheme = {
  borderColor: 'gray.400',
  borderStyle: 'solid',
  borderWidth: '2px',
};

export const inputTheme = {
  baseStyle: {
    ...borderInputTheme,
    color: 'black',
  },
  variants: {
    outline: {
      borderWidth: '5',
      borderStyle: 'solid',
      borderColor: 'red',
    },
  },
};
