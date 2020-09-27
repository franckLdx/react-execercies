import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/core";
import { useLoadPosts } from "../../../models/posts/hooks";
import { PostItem } from "./PostItems";
import { LoadablePage } from "../../../sharedPages/LoadablePage";

const horizontalSpaceBetweenItem = { base: 2, md: 2 }

export const Posts: FunctionComponent = () => {
  const [posts, loadingState, loadingError] = useLoadPosts();
  return (
    <LoadablePage loadingState={loadingState} loadingError={loadingError}>
      <Flex wrap="wrap" justifyContent="space-around" pb={{ ...horizontalSpaceBetweenItem }}>
        {posts.map((post) =>
          <PostItem key={post.id} post={post} mt={horizontalSpaceBetweenItem} />
        )}
      </Flex>
    </LoadablePage>
  );
};

