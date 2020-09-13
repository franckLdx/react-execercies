import { Flex } from "@chakra-ui/core";
import React, { FunctionComponent } from "react";
import { Loading } from "../../misc/Loading";
import { useLoadPosts } from "../hooks";
import { PostItem } from "./PostItems";

const Posts: FunctionComponent = () => {
  const postsModel = useLoadPosts();
  switch (postsModel.state) {
    case 'none':
    case 'loading':
      return <Loading />;
    case 'loaded':
      return (
        <Flex wrap="wrap" justifyContent="space-around" alignItems="center" justify-content="center">
          {postsModel.posts.map((post) => <PostItem key={post.id} post={post} />)};
        </Flex>
      );
    case 'error':
      throw postsModel.error;
  }
};

export default Posts;
