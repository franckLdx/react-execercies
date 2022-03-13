import { ComponentStyleConfig } from "@chakra-ui/react";

export const Select: ComponentStyleConfig = {
  parts: ['select'],
  baseStyle: {
    _hover: {},
    _focus: {},
    _active: {},
  },
  defaultProps: {
    variant: "outline",
  }
}