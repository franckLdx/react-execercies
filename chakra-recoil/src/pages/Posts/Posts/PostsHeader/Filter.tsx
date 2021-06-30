import React, { ChangeEvent, FunctionComponent, useCallback } from "react";
import { useRecoilState } from "recoil";
import Input from "@chakra-ui/core/dist/Input";
import { filterPostsState } from "../../../../state/posts";

export const Filter: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPostsState);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value),
    [setFilter]
  );

  return (
    <Input placeholder="Search for a title" onChange={onChange} value={filter ?? ''} />
  );
};

Filter.displayName = "PostsFilter";
