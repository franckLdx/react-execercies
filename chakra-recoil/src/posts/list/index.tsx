import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/core";
import { Loading } from "../../misc/Loading";
import { useLoadPosts } from "./misc/hooks";
import { PostItem } from "./PostItems";
import { Page } from "../../misc/Page";

const horizontalSpaceBetweenItem = { base: 2, md: 2 }

const Posts: FunctionComponent = () => {
  const [posts, loadingState, loadingError] = useLoadPosts();
  switch (loadingState) {
    case 'none':
    case 'loading':
      return <Loading />;
    case 'loaded':
      return (
        <Page>
          <Flex wrap="wrap" justifyContent="space-around" pb={{ ...horizontalSpaceBetweenItem }}>
            {posts.map((post) =>
              <PostItem key={post.id} post={post} mt={horizontalSpaceBetweenItem} />
            )}
          </Flex>
        </Page >
      );
    case 'error':
      throw loadingError;
  }
};

export default Posts;
