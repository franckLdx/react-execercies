import React, { FunctionComponent, memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { userByIdState } from '../../../state/users';
import { getUserPageUrl } from '../../../routes';
import { Card, CardText, CardDivider } from '../../../sharedComponents/Card';
import { Post } from '../../../model';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: FunctionComponent<PostInfoProps> = memo(({ post }) => {
  const user = useRecoilValue(userByIdState(post.userId));
  const userLink = useMemo(() => getUserPageUrl(post.userId), [post]);

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