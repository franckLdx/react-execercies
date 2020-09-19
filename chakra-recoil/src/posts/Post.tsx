import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getPost } from './model';

const Post: FunctionComponent = () => {
  const { id } = useParams();
  const post = useRecoilValue(getPost(Number(id)))

  return (
    <div>
      <h3>ID: {post?.id}</h3>
      {post?.title}
      {post?.body}
      {post?.userId}
    </div>
  );
}

export default Post;