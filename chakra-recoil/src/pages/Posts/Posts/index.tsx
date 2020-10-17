import React, { FunctionComponent } from 'react';
import { Page } from '../../../sharedPages/Page';
import { PostsHeader } from './PostsHeader';
import { PostsList } from './PostsList';

const PostsPage: FunctionComponent = () => (
  <Page>
    <PostsHeader />
    <PostsList />
  </Page>
);

export default PostsPage;