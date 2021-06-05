import {
  extendTheme,
  ThemeComponents,
  ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { buttonTheme } from './button';
import { tooltipTheme } from './tooltip';

const colorScheme = withDefaultColorScheme({
  colorScheme: 'teal',
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components: ThemeComponents = {
  Button: buttonTheme,
  Tooltip: tooltipTheme,
};

export const AppTheme = extendTheme(
  {
    config,
    components,
  },
  colorScheme,
);
