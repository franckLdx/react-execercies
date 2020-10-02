import React, { ChangeEvent, FunctionComponent, memo, useCallback } from "react";
import { ExtraBorder } from "../../../sharedComponents/ExtraBorder";
import { Box, Button, Icon, Input } from "@chakra-ui/core";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterPosts, loadPosts, postsAtom, postsMetaDataAtom } from "../../../state/posts";

export const PostsHeader: FunctionComponent = memo(() => (
  <ExtraBorder >
    <Box display="flex">
      <Reload />
      <Filter />
    </Box>
  </ExtraBorder>
));

export const Filter: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPosts);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value), [setFilter]);
  return (
    <Input placeholder="Search for a title" onChange={handleChange} defaultValue={filter} />
  );
};

export const Reload: FunctionComponent = () => {
  const setPosts = useSetRecoilState(postsAtom);
  const [metaData, setMetaData] = useRecoilState(postsMetaDataAtom);

  const reload = useCallback(
    () => loadPosts(true, { setPosts, metaData, setMetaData }),
    [metaData, setMetaData, setPosts]
  );

  return (
    <Button marginRight={1} onClick={reload}>
      Reload <Icon marginLeft={[1, 1, 3]} name="repeat" />
    </Button>
  );
};