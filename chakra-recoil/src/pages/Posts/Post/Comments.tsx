import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { BoxProps } from '@chakra-ui/core';
import { CommentItem } from './CommentItem';
import { commentsState } from '../../../state';

type CommentsProps = {
  postId: number;
} & Pick<BoxProps, 'paddingTop'>

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
  const comments = useRecoilValue(commentsState(postId));
  return (
    <>
      {
        comments.map(comment =>
          <CommentItem
            key={comment.name}
            postId={postId}
            commentId={comment.id}
          />)
      }
    </>
  )
}
