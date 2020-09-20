import React, { FunctionComponent, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Page } from '../../misc/Page';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../../users/model';
import { useLoadPost } from './misc/hooks';
import { Loading } from '../../misc/Loading';

const Post: FunctionComponent = () => {
  const { id } = useParams();
  const postId = useMemo(() => {
    const num = Number(id);
    if (isNaN(num)) {
      throw new Error(`Not a valid post id`);
    }
    return num;
  }, [id]);
  const [post, loadingState, loadingError] = useLoadPost(postId)
  const user = useRecoilValue(usersFamily(post?.userId));
  switch (loadingState) {
    case 'none':
    case 'loading':
      return <Loading />;
    case 'loaded':
      return (
        <Page>
          <Text fontSize="6xl" {...DividerProps} marginBottom="8">{post?.title}</Text>
          <Text fontSize="4xl">{post?.body}</Text>
          <Text fontSize="4xl"{...DividerProps} paddingBottom="20">{post?.body}</Text>
          <Text fontSize="4xl" textAlign="right">{user?.username}</Text>
        </Page >
      );
    case 'error':
      throw loadingError;
  }
}

const DividerProps = { borderBottomColor: "blue.700", borderBottomWidth: "2px" }

export default Post;