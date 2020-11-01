import Input from '@chakra-ui/core/dist/Input';
import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Card, CardDivider, CardText } from '../../../sharedComponents/Card';
import { commentState } from '../../../state/comments';

interface CommentItemProps {
  postId: number;
  commentName: string;
}

export const CommentItem: FunctionComponent<CommentItemProps> = (props) => {
  const [comment, setComment] = useRecoilState(commentState(props));
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newComment = { ...comment!, body: event.target.value };
      setComment(newComment);
    },
    [comment, setComment]
  );

  if (comment === undefined) {
    throw new Error("Uncinstent state");
  }

  return (
    <Card marginTop="2" >
      <CardText text={comment.name} size="small" />
      <CardDivider marginBottom="2" />
      <Input defaultValue={comment.body} onChange={onChange} />
    </Card >
  );
}