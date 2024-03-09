import { extendTheme, ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colorScheme = withDefaultColorScheme({
  colorScheme: 'teal',
});

export const AppTheme = extendTheme(
  { config }, colorScheme
);
