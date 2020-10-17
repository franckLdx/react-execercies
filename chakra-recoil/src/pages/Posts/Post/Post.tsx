import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { LoadingProvider } from '../../../sharedComponents/LoadingProvider';
import { useParamId } from '../../../sharedHooks/hooks';
import { postByIdState } from '../../../state/posts/functions';
import { Comments } from './Comments';
import { PostInfo } from './PostInfo';
import Text from "@chakra-ui/core/dist/Text";

export const Post: FunctionComponent = () => {
  const postId = useParamId();
  const post = useRecoilValue(postByIdState(postId));
  return (<>
    {post && <PostInfo post={post} />}
    <Text marginTop="5" color="app.main" fontSize="3xl" fontWeight="app.bold"> Comments:</Text>
    <LoadingProvider>
      <Comments paddingTop="6" postId={postId} />
    </LoadingProvider>
  </>);
};

Post.displayName = "Post";