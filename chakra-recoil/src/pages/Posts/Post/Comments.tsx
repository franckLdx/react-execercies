import React, { FunctionComponent, useEffect } from 'react';
import { loadComments } from '../../../state/comment';
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilState } from 'recoil';
import { getPost, Post } from '../../../state/post';
import { CommentItem } from './CommentItem';
import { BoxProps } from '@chakra-ui/core';

type CommentsProps = {
  postId: number;
} & Pick<BoxProps, 'paddingTop'>

export const Comments: FunctionComponent<CommentsProps> = ({ postId, ...props }) => {
  const [post, setPost] = useRecoilState(getPost(postId));

  useEffect(() => {
    if (post === undefined) {
      return;
    }
    if (post.commentKeys === undefined) {
      loadComments(postId).then(commentKeys => {
        const updatedPost: Post = { ...post, commentKeys };
        setPost(updatedPost);
      });
    }
  }, [post, postId, setPost]);

  return (
    <>
      <Text color="app.main" fontSize="3xl" fontWeight="app.bold" {...props}> Comments:</Text>
      {
        post?.commentKeys?.map(commentKey => <CommentItem key={commentKey} commentKey={commentKey} />)
      }
      {post?.commentKeys === undefined ? "Please wait" : ""}
    </>
  )
}
