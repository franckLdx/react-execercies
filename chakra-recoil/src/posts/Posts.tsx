import React, { useEffect, FunctionComponent } from "react";
import { loadPosts } from "../api/posts";
import { postsAtom, Post } from "./model";
import { useRecoilState, useRecoilValue } from "recoil";
import { Text, Flex, PseudoBox, Divider } from "@chakra-ui/core";
import { Loading } from "../misc/Loading";
import { usersFamily } from "../users/model";

const Posts: FunctionComponent = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  useEffect(() => {
    loadPosts(setPosts);
  }, [setPosts]);
  if (posts.length === 0) {
    return <Loading />;
  }
  return (
    <Flex wrap="wrap" justifyContent="space-around" alignItems="center">
      {posts.map((post) => <PostItem key={post.id} post={post} />)};
    </Flex >
  );
};

interface PostItemProps {
  post: Post;
}
const PostItem: FunctionComponent<PostItemProps> = ({ post }) => {
  const user = useRecoilValue(usersFamily(post.userId));
  return (
    <PseudoBox
      w="350px"
      borderColor="gray.400" borderWidth="2px" rounded="lg" shadow="sm"
      mt={{ base: 2, md: 4 }} p="2"
      fontSize="xl"
      _hover={{ borderColor: "gray.900", fontWeight: "bold", shadow: "xl", borderWidth: "3px" }}
    >
      <Text h="5em" >
        {post.title}
      </Text>
      <Divider />
      <Text textAlign="right">
        {user?.username}
      </Text>
    </PseudoBox >
  )
}
export default Posts;
