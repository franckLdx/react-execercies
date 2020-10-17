import React, { FunctionComponent } from "react";
import { PostItem } from "./PostItems";
import { PostsHeader } from "./PostsHeader";
import { Page } from "../../../sharedPages/Page";
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid";
import { useRecoilValue } from "recoil";
import { filteredPostsState } from "../../../state/posts";

export const PostsList: FunctionComponent = () => {
  const posts = useRecoilValue(filteredPostsState);
  return (
    <Page>
      <PostsHeader />
      <SimpleGrid as="section" columns={[1, 2, 3, 4]} spacing={[5, 8]} padding={5}>
        {posts.map(
          (post) => <PostItem key={post.id} post={post} />
        )}
      </SimpleGrid>
    </Page >
  );
};
