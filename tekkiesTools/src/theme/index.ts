import {
  extendTheme,
  ThemeComponents,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { globalStyles } from './globalStyle';
import { colorMode } from './colorMode';
import { layerStyles } from './layerStyle';
import { buttonTheme, containerTheme, inputTheme } from './components';

const colorScheme = withDefaultColorScheme({
  colorScheme: 'teal',
});

const components: ThemeComponents = {
  Button: buttonTheme,
  Container: containerTheme,
  Input: inputTheme,
};

export const theme = extendTheme(
  {
    ...colorMode,
    styles: globalStyles,
    layerStyles,
    components,
  },
  colorScheme,
);
