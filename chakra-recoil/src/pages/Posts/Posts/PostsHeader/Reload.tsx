import React, { FunctionComponent, useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import Button from "@chakra-ui/core/dist/Button";
import Icon from "@chakra-ui/core/dist/Icon";
import Text from "@chakra-ui/core/dist/Text";
import { format } from "date-fns";
import { loadedPostsDateState } from "../../../../state";

export type ReloadProps = Pick<BoxProps, 'marginRight'>;

export const Reload: FunctionComponent<ReloadProps> = ({ marginRight }) => {
  const [rawloadedDate, setLoadedDate] = useRecoilState(loadedPostsDateState);
  const reload = useCallback(
    () => {
      setLoadedDate(new Date())
    },
    [setLoadedDate]
  );
  const formattedLoadedDate = useMemo(
    () => rawloadedDate !== undefined ? format(rawloadedDate, "yyyy-MM-dd HH:mm:ss") : '',
    [rawloadedDate]
  );

  return (
    <Box {...boxProps} marginRight={marginRight}>
      <Text {...textProps}>
        Last load: {formattedLoadedDate}
      </Text>
      <Button flexGrow={1} onClick={reload}>
        Reload <Icon marginLeft={[1, 1, 3]} name="repeat" />
      </Button>
    </Box>
  );
};

Reload.displayName = "Reload";

const boxProps: BoxProps = {
  display: "flex",
  flexDirection: ["column", "row"],
  marginBottom: ["2", "0"],
  color: "app.main",
  fontWeight: "app.medium",
}

const textProps: BoxProps = {
  minWidth: "15em",
  paddingLeft: "3",
  paddingY: "2",
  marginBottom: [1, 1, 0],
  overflowWrap: "break-word",
}