import { theme } from "@chakra-ui/core";
console.log(theme);

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    app: {
      main: theme.colors.blue[700],
      secondary: theme.colors.blue[800],
      mainBackground: theme.colors.blue[100],
      secondaryBackground: theme.colors.white,
      thirdBackground: theme.colors.blue[200],
      mainBorder: "black",
      progress: "green",
      divider: theme.colors.blue[700],
    },
  },
  fontWeights: {
    ...theme.fontWeights,
    app: {
      normal: theme.fontWeights.normal,
      medium: theme.fontWeights.medium,
      bold: theme.fontWeights.bold,
    }
  },
  fontSizes: {
    ...theme.fontSizes,
    app: {
      normal: theme.fontSizes.xl,
      medium: theme.fontSizes["2xl"],
    }
  },
  shadows: {
    ...theme.shadows,
    app: {
      normal: theme.shadows.lg,
      medium: theme.shadows["2xl"],
    }
  },
  sizes: {
    ...theme.sizes,
    app: {
      itemContainer: { minHeight: theme.sizes[32] },
    }
  },
  radii: {
    ...theme.radii,
    app: {
      normal: theme.radii.lg
    }
  }
};

