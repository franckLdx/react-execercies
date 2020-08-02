import React, { FunctionComponent } from "react";
import { Box, useColorMode, Text } from "@chakra-ui/core";

const color = { light: "black", dark: "white" };
const bgColor = { light: "red", dark: "black" };

export const ShitHappens: FunctionComponent = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      background={bgColor[colorMode]}
      color={color[colorMode]}
      fontWeight="bold"
      padding="20"
    >
      <Text fontSize="4xl" fontWeight="bold">
        Sorry, Something wrong Happen.
        <br />
        <br />
      </Text>
      <Text fontSize="3xl">
        You should relod the app.
      </Text>
    </Box>
  );
};
