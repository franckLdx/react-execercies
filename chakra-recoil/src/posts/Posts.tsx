import React, { FunctionComponent } from "react";
import { Post } from "./model";
import { useRecoilValue } from "recoil";
import { Text, Flex, PseudoBox, Divider, PseudoBoxProps } from "@chakra-ui/core";
import { Loading } from "../misc/Loading";
import { usersFamily } from "../users/model";
import { useLoadPosts } from "./hooks";

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

interface PostItemProps {
  post: Post;
}
const PostItem: FunctionComponent<PostItemProps> = ({ post }) => {
  const user = useRecoilValue(usersFamily(post.userId));
  return (
    <PseudoBox {...PostItemContainerProps}>
      <Text h="5em">
        {post.title}
      </Text>
      <Divider />
      <Text textAlign="right">
        {user?.username}
      </Text>
    </PseudoBox>
  );
};

const PostItemContainerProps: PseudoBoxProps = {
  w: "350px",
  borderColor: "gray.400",
  borderWidth: "2px",
  rounded: "lg",
  shadow: "sm",
  mt: { base: 2, md: 4 },
  p: "2",
  fontSize: "xl",
  _hover: {
    borderColor: "gray.900",
    fontWeight: "bold",
    shadow: "xl",
    borderWidth: "3px",
  },
}

export default Posts;
