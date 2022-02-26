import { ComponentStyleConfig } from "@chakra-ui/react";

const hover = {
  bgColor: "brand.hover",
  boxShadow: 'none',
}

const checked = {
  color: "brand.primary",
  background: "brand.secondary",
  bgColor: "brand.secondary",
  boxShadow: 'none',
  borderColor: "brand.disabled",
}

export const Radio: ComponentStyleConfig = {
  parts: ['control'],
  variants: {
    brand: {
      control: {
        color: "brand.ternary",
        bgColor: "brand.secondary",
        _hover: hover,
        _active: hover,
        _focus: hover,
        _checked: {
          ...checked,
          _active: checked,
          _hover: checked,
          _focus: checked,
        },
      },
    }
  },
  sizes: {
    md: {
      control: {
        backgroundClip: 'content-box',
        padding: '4px',
        width: "26px",
        height: "26px",
        borderWidth: "1px",
        borderHeight: "1px",
        _checked: {
          _before: {
            width: '100%',
            height: '100%',
          },
        },
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "brand",
  }
}