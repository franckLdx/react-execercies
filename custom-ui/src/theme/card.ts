import { ComponentStyleConfig } from "@chakra-ui/react";

export const Card: ComponentStyleConfig = {
  variants: {
    primary: {
      bgColor: "brand.white"
    }
  },
  defaultProps: {
    variant: "primary",
  }
}