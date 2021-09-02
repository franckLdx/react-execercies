import { ComponentSingleStyleConfig, CSSObject } from '@chakra-ui/react';

export const placeholderForInputTheme: CSSObject = {
  fontSize: '1.05em',
  fontWeight: 'bold',
  color: 'gray.400',
};

export const inputTheme: ComponentSingleStyleConfig = {
  baseStyle: {
    borderColor: 'gray.400',
    color: 'black',
    backgroundColor: 'white',
  },
  variants: {
    login: {
      border: 'solid 2px',
      borderColor: 'black',
    },
  },
};
