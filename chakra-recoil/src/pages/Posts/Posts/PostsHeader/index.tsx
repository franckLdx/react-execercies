import React, { FunctionComponent, memo } from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import { AppBorder } from "../../../../sharedComponents/AppBorder";
import { Reload, ReloadProps } from "./Reload";
import { Filter } from "./Filter";

export const PostsHeader: FunctionComponent = memo(() => (
  <AppBorder >
    <Box {...boxProps} >
      <Reload {...reloadProps} />
      <Filter />
    </Box >
  </AppBorder >
));

PostsHeader.displayName = "PostsHeader";

const boxProps: BoxProps = {
  display: "flex",
  flexDirection: ["column", "column", "row"],
}

const reloadProps: ReloadProps = {
  marginRight: ["0", "0", "3"]
}