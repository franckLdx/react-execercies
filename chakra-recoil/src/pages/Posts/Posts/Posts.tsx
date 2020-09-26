import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/core";
import { Loading } from "../../../sharedComponents/misc/Loading";
import { useLoadPosts } from "./misc/hooks";
import { PostItem } from "./PostItems";
import { Page } from "../../../sharedComponents/misc/Page";

const horizontalSpaceBetweenItem = { base: 2, md: 2 }

export const Posts: FunctionComponent = () => {
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

