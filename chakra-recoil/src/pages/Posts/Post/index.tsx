import Box from '@chakra-ui/core/dist/Box';
import React, { FunctionComponent } from 'react';
import { Page } from '../../../sharedPages/Page';
import { Post } from './Post';

const PostPage: FunctionComponent = () => (
  <Page>
    <Box padding="4" >
      <Post />
    </Box>
  </Page>
);


export default PostPage;