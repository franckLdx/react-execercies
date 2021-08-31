import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './globalStyle';
import { colorMode } from './colorMode';
import { layerStyles } from './layerStyle';

export const theme = extendTheme({
  ...colorMode,
  layerStyles,
  styles: globalStyles,
});
