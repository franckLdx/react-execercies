import { ComponentStyleConfig } from "@chakra-ui/react";

const hover = {
  opacity: 0.8
}

export const Button: ComponentStyleConfig = {
  baseStyle: {
    paddingX: '5px',
    paddingY: '10px',
    borderRadius: '3px',
    _hover: hover,
    _visited: hover,
    _active: hover,
    _focus: hover,
  },
  variants: {
    primary: {
      color: "brand.white",
      bgColor: "brand.yellow",
      _disabled: {
        color: 'brand.white',
        bgColor: 'brand.darkGrey',
        pointerEvents: 'none',
        opacity: 0.65,
      }
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
    variant: "primary",
    size: "md",
    textStyle: 'normal'
  }
}