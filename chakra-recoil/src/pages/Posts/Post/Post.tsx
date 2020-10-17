import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { useParamId } from '../../../sharedHooks/hooks';
import { postByIdState } from '../../../state/posts/functions';
import { Comments } from './Comments';
import { PostInfo } from './PostInfo';

export const Post: FunctionComponent = () => {
  const postId = useParamId();
  const post = useRecoilValue(postByIdState(postId));
  return (
    <Box padding="4">
      {post && <PostInfo post={post} />}
      <Comments paddingTop="6" postId={postId} />
    </Box>
  );
};

Post.displayName = "Post";