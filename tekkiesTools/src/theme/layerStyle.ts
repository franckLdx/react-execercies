import { Dict } from '@chakra-ui/utils';

export const layerStyles: Dict = {
  container: {
    borderWidth: 3,
    borderRadius: 8,
    boxShadow: 'lg',
    opacity: '0.95',
    backgroundColor: 'white',
    '.chakra-ui-dark &': { bg: 'white' },
  },
};
