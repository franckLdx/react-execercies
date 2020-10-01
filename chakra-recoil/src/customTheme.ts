import { theme } from "@chakra-ui/core";
console.log(theme);

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    app: {
      mainColor: theme.colors.blue[700],
      secondaryColor: theme.colors.blue[800],
      mainBackgroundColor: theme.colors.blue[100],
      secondaryBackgroundColor: theme.colors.white,
      selectedBorderColor: theme.colors.blue[200],
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

