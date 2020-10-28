import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { BoxProps } from '@chakra-ui/core';
import { commentsByPostIdState } from '../../../state/comments';
import { CommentItem } from './CommentItem';

type CommentsProps = {
  postId: number;
} & Pick<BoxProps, 'paddingTop'>

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
  const comments = useRecoilValue(commentsByPostIdState(postId));
  return (
    <>
      {
        comments.map(comment => <CommentItem key={comment.name} comment={comment} />)
      }
    </>
  )
}
