import { CSSObject } from '@chakra-ui/react';

const placeholder: CSSObject = {
  fontSize: '1.05em',
  fontWeight: 'bold',
  color: 'gray.400',
};

const border: CSSObject = {
  borderColor: 'gray.400',
  borderStyle: 'solid',
  borderWidth: '2px',
};

export const inputTheme = {
  baseStyle: {
    field: {
      ...border,
      color: 'black',
      _placeholder: placeholder,
    },
  },
};
