import React, { FunctionComponent, memo } from 'react';
import { Card, CardText, CardDivider } from '../../../sharedComponents/Card';
import { Post } from '../../../state';
import { UserInfo } from './UserInfo';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: FunctionComponent<PostInfoProps> = memo(({ post }) => (
  <Card>
    <CardText text={post.title} size="medium" />
    <CardDivider />
    <CardText text={post.body} />
    <CardDivider />
    <UserInfo userId={post.userId} />
  </Card>
));

PostInfo.displayName = "PostInfo";