import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { BoxProps } from '@chakra-ui/core';
import { CommentItem } from './CommentItem';
import { commentsAtom } from '../../../state/comments';

type CommentsProps = {
  postId: number;
} & Pick<BoxProps, 'paddingTop'>

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
  const comments = useRecoilValue(commentsAtom(postId));
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
