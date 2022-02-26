import { ComponentStyleConfig } from "@chakra-ui/react";

const visited = {
  opacity: 0.8
}

export const Button: ComponentStyleConfig = {
  baseStyle: {
    paddingX: '5px',
    paddingY: '10px',
    borderRadius: '3px',
    _hover: visited,
    _visited: visited,
    _active: visited,
    _focus: visited,
    _disabled: {
      color: 'brand.secondary',
      bgColor: 'brand.disabled',
      pointerEvents: 'none',
      opacity: 0.65,
    }
  },
  variants: {
    brand: {
      bgColor: "brand.primary",
      color: "brand.secondary",
    },
  },
  sizes: {
    sm: {
      width: "100px"
    },
    md: {
      height: "30px",
      width: "220px"
    },
  },
  defaultProps: {
    size: "md",
    variant: "brand",
    textStyle: 'normal'
  }
}