import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../../../models/users/model';
import { Link } from 'react-router-dom';
import { useParamId } from '../../../sharedHooks/hooks';
import { LoadablePage } from '../../../sharedPages/LoadablePage';
import { useLoadPost } from '../../../models/posts/hooks';

export const Post: FunctionComponent = () => {
  const postId = useParamId();

  const [post, loadingState, loadingError] = useLoadPost(postId)
  const user = useRecoilValue(usersFamily(post?.userId));

  return (
    <LoadablePage loadingState={loadingState} loadingError={loadingError}>
      <Text fontSize="6xl" {...DividerProps} marginBottom="8">{post?.title}</Text>
      <Text fontSize="4xl">{post?.body}</Text>
      <Text fontSize="4xl"{...DividerProps} paddingBottom="20">{post?.body}</Text>
      {user && (
        <Link to={`/users/${user.id}`}>
          <Text fontSize="4xl" textAlign="right">{user?.username}</Text>
        </Link>
      )}
    </LoadablePage>
  );
}

const DividerProps = { borderBottomColor: "blue.700", borderBottomWidth: "2px" }
