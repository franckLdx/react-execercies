import React, { ChangeEvent, FunctionComponent, memo, useCallback } from "react";
import { ExtraBorder } from "../../../sharedComponents/ExtraBorder";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterPosts, loadPosts, postsAtom, postsMetaDataAtom } from "../../../state/posts";
import { format } from "date-fns";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import Button from "@chakra-ui/core/dist/Button";
import Input from "@chakra-ui/core/dist/Input";
import Icon from "@chakra-ui/core/dist/Icon";

export const PostsHeader: FunctionComponent = memo(() => (
  <ExtraBorder >
    <Box display="flex" flexDirection={["column", "column", "row"]} >
      <Reload marginRight={[0, 0, 2]} />
      <Filter />
    </Box >
  </ExtraBorder >
));
PostsHeader.displayName = "Header";

type ReloadProps = Pick<BoxProps, 'marginRight'>;

export const Reload: FunctionComponent<ReloadProps> = ({ marginRight }) => {
  const setPosts = useSetRecoilState(postsAtom);
  const [metaData, setMetaData] = useRecoilState(postsMetaDataAtom);

  const reload = useCallback(
    () => loadPosts(true, { setPosts, metaData, setMetaData }),
    [metaData, setMetaData, setPosts]
  );

  return (
    <Box display="flex"
      flexDirection={["column", "row"]}
      marginBottom={["2", "0"]}
      marginRight={marginRight}
      color="app.main"
      fontWeight="app.medium"
    >
      <Text
        minWidth="15em"
        paddingLeft="3"
        paddingY="2"
        marginBottom={[1, 1, 0]}
      >
        Last load: {metaData.loadedDate && format(metaData.loadedDate, "yyyy-MM-dd HH:mm:ss")}
      </Text>
      <Button flexGrow={1} onClick={reload} isDisabled={metaData.loadingState === 'loading'}>
        Reload <Icon marginLeft={[1, 1, 3]} name="repeat" />
      </Button>
    </Box>
  );
};
Reload.displayName = "Reload";

export const Filter: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPosts);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value),
    [setFilter]
  );
  return (
    <Input placeholder="Search for a title" onChange={onChange} defaultValue={filter} />
  );
};
Filter.displayName = "Filter";
