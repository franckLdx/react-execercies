import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Page } from '../misc/Page';
import { getPost } from './misc/model';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../users/model';

const Post: FunctionComponent = () => {
  const { id } = useParams();
  const post = useRecoilValue(getPost(Number(id)))
  const user = useRecoilValue(usersFamily(post?.userId));
  return (
    <Page>
      <Text fontSize="6xl" {...DividerProps} marginBottom="8">{post?.title}</Text>
      <Text fontSize="4xl">{post?.body}</Text>
      <Text fontSize="4xl"{...DividerProps} paddingBottom="20">{post?.body}</Text>
      <Text fontSize="4xl" textAlign="right">{user?.username}</Text>
    </Page >
  );
}

const DividerProps = { borderBottomColor: "blue.700", borderBottomWidth: "2px" }

export default Post;