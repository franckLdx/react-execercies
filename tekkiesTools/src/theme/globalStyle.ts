import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

export const globalStyles: Dict = {
  global: (props: Dict): Dict => ({
    body: {
      color: mode('black', 'white')(props),
      bg: mode('white', 'black')(props),
    },
  }),
};
