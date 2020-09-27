import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../../../models/users/model';
import { Link } from 'react-router-dom';
import { useParamId } from '../../../sharedHooks/hooks';
import { LoadablePage } from '../../../sharedPages/LoadablePage';
import { useLoadPost } from '../../../models/posts/hooks';
import { Card } from '../../../sharedComponents/Card';

export const Post: FunctionComponent = () => {
  const postId = useParamId();

  const [post, loadingState, loadingError] = useLoadPost(postId)
  const user = useRecoilValue(usersFamily(post?.userId));

  return (
    <LoadablePage loadingState={loadingState} loadingError={loadingError}>
      <Card
        title={post?.title}
        body={post?.body}
        footer={
          user && (
            <Link to={`/users/${user.id}`}>
              <Text fontSize="4xl" textAlign="right">{user?.username}</Text>
            </Link>
          )
        }
      />
    </LoadablePage>
  );
}
