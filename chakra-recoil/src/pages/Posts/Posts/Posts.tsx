import React, { FunctionComponent } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { useLoadPosts } from "../../../models/posts/hooks";
import { PostItem } from "./PostItems";
import { LoadablePage } from "../../../sharedPages/LoadablePage";

export const Posts: FunctionComponent = () => {
  const [posts, loadingState, loadingError] = useLoadPosts();
  return (
    <LoadablePage loadingState={loadingState} loadingError={loadingError}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={[5, 8]} padding={5}>
        {posts.map((post) =>
          <PostItem key={post.id} post={post} />
        )}
      </SimpleGrid>
    </LoadablePage>
  );
};

