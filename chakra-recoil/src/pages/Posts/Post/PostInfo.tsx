import React, { FunctionComponent, memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { usersAtom } from '../../../state/user';
import { Link } from 'react-router-dom';
import { Card, CardDivider, CardText } from '../../../sharedComponents/Card';
import { Post } from '../../../state/post';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: FunctionComponent<PostInfoProps> = memo(({ post }) => {
  const user = useRecoilValue(usersAtom(post.userId));
  const userLink = useMemo(() => `/users/${post.id}`, [post]);

  return (
    <Card>
      <CardText text={post.title} size="medium" />
      <CardDivider />
      <CardText text={post.body} />
      <CardDivider />
      <Link to={userLink}>
        <CardText text={user?.username ?? ''} textAlign="right" />
      </Link>
    </Card>
  );
});

PostInfo.displayName = "PostInfo";