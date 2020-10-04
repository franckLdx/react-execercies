import { Box } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { useParamId } from '../../../sharedHooks/hooks';
import { LoadablePage } from '../../../sharedPages/LoadablePage';
import { useLoadPost } from '../../../state/post';
import { Comments } from './Comments';
import { PostInfo } from './PostInfo';

export const Post: FunctionComponent = () => {
  const postId = useParamId();
  const [post, metaData] = useLoadPost(postId);
  return (
    <LoadablePage loadingState={metaData.loadingState} loadingError={metaData.error}>
      <Box padding="4">
        {post && <PostInfo post={post} />}
        <Comments paddingTop="6" postId={postId} />
      </Box>
    </LoadablePage >
  );
};

Post.displayName = "Post";