import React, { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/core";
import { Loading } from "../../misc/Loading";
import { useLoadPosts } from "../hooks";
import { PostItem } from "./PostItems";
import { ExtraBorder } from "../../misc/ExtraBorder";

const horizontalSpaceBetweenItem = { base: 2, md: 2 }

const Posts: FunctionComponent = () => {
  const postsModel = useLoadPosts();
  switch (postsModel.state) {
    case 'none':
    case 'loading':
      return <Loading />;
    case 'loaded':
      return (
        <ExtraBorder>
          <Flex backgroundColor="blue.100" wrap="wrap" justifyContent="space-around" pb={{ ...horizontalSpaceBetweenItem }}>
            {postsModel.posts.map((post) =>
              <PostItem key={post.id} post={post} mt={horizontalSpaceBetweenItem} />
            )}
          </Flex>
        </ExtraBorder >
      );
    case 'error':
      throw postsModel.error;
  }
};

export default Posts;
