import React, { FunctionComponent } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { PostItem } from "./PostItems";
import { PostsHeader } from "./PostsHeader";
import { LoadableComponent } from "../../../sharedComponents/LoadableComponent";
import { Page } from "../../../sharedPages/Page";
import { useLoadPosts } from "../../../state/posts";

export const PostsList: FunctionComponent = () => {
  const [posts, metaData] = useLoadPosts();
  return (
    <Page>
      <PostsHeader />
      <LoadableComponent loadingState={metaData.loadingState} loadingError={metaData.error}>
        <SimpleGrid as="section" columns={[1, 2, 3, 4]} spacing={[5, 8]} padding={5}>
          {posts.map((post) =>
            <PostItem key={post.id} post={post} />
          )}
        </SimpleGrid>
      </LoadableComponent>
    </Page>
  );
};

