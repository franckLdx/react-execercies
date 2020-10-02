import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import Text from "@chakra-ui/core/dist/Text";
import { usersFamily } from '../../../state/user';
import { Link } from 'react-router-dom';
import { useParamId } from '../../../sharedHooks/hooks';
import { LoadablePage } from '../../../sharedPages/LoadablePage';
import { Card } from '../../../sharedComponents/Card';
import { useLoadPost } from '../../../state/post';
import { Comments } from './Comments';

export const Post: FunctionComponent = () => {
  const postId = useParamId();

  const [post, metaData] = useLoadPost(postId);

  const user = useRecoilValue(usersFamily(post?.userId));

  return (
    <LoadablePage loadingState={metaData.loadingState} loadingError={metaData.error}>
      <Card
        title={post?.title}
        body={post?.body}
        footer={
          user && (
            <Link to={`/users/${user.id}`}>
              <Text textAlign="right">{user?.username}</Text>
            </Link>
          )
        }
      />
      <Comments postId={postId} />
    </LoadablePage>
  );
}
