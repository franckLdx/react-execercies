import { ComponentStyleConfig } from "@chakra-ui/react";

export const Select: ComponentStyleConfig = {
  parts: ['field', 'icon'],
  variants: {
    primary: {
      field: {
        borderColor: "brand.lightGrey",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "3px",
        paddingLeft: "10px"
      },
      icon: {
        borderLeftColor: "brand.lightGrey",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
        left: '60%'
      },
    }
  },
  sizes: {
    md: {
      field: {
        height: "34px",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md"
  }
}