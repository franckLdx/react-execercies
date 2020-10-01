import { ChangeEvent, FunctionComponent, useCallback } from "react";
import React from 'react';
import { ExtraBorder } from "../../../sharedComponents/ExtraBorder";
import { Input } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { filterPosts } from "../../../models/posts/model";

export const PostsHeader: FunctionComponent = () => {
  const [filter, setFilter] = useRecoilState(filterPosts);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value), [setFilter]);
  return (
    <ExtraBorder >
      <Input placeholder="Search for a title" onChange={handleChange} defaultValue={filter} />
    </ExtraBorder>
  );
};