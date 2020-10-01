import { ChangeEvent, FunctionComponent, useCallback } from "react";
import React from 'react';
import { ExtraBorder } from "../../../sharedComponents/ExtraBorder";
import { Box, Button, Icon, Input } from "@chakra-ui/core";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterPosts, loadingErrorAtom, loadingStateAtom, postsAtom } from "../../../models/posts/model";
import { loadPosts } from "../../../models/posts/hooks";

export const PostsHeader: FunctionComponent = () => {
  return (
    <ExtraBorder >
      <Box display="flex">
        <Reload />
        <Filter />
      </Box>
    </ExtraBorder>
  );
};

export const Filter: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPosts);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value), [setFilter]);
  return (
    <Input placeholder="Search for a title" onChange={handleChange} defaultValue={filter} />
  );
};

export const Reload: FunctionComponent = () => {
  const setPosts = useSetRecoilState(postsAtom);
  const [loadingState, setLoadingState] = useRecoilState(loadingStateAtom);
  const setLoadingError = useSetRecoilState(loadingErrorAtom);

  const reload = useCallback(
    () => loadPosts(true, { loadingState, setLoadingState, setPosts, setLoadingError }),
    [loadingState, setLoadingError, setLoadingState, setPosts]
  );

  return (
    <Button marginRight={1} onClick={reload}>
      Reload <Icon marginLeft={[1, 1, 3]} name="repeat" />
    </Button>
  );
};