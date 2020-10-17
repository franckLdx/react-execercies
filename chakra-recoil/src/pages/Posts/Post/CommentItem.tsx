import React, { FunctionComponent } from 'react';
import { Card, CardDivider, CardText } from '../../../sharedComponents/Card';
import { Comment } from '../../../state/comments/atoms';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem: FunctionComponent<CommentItemProps> = ({ comment }) => {
  // const onChange = useCallback(
  //   (event: ChangeEvent<HTMLInputElement>) => {
  //     const updatedComment = { ...comment, body: event.target.value };
  //     setComment(updatedComment);
  //   },
  //   [comment, setComment]
  // );

  return (
    <Card marginTop="2" >
      <CardText text={comment.name} size="small" />
      <CardDivider marginBottom="2" />
      <CardText text={comment.body} size="small" />
      {/* <Input defaultValue={comment.body} onChange={onChange} />  */}
    </Card >
  );
}