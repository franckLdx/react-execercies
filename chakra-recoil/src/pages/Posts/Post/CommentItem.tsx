import React, { ChangeEvent, FunctionComponent, useCallback, useMemo } from 'react';
import { commentsMap } from '../../../state/comment';
import Input from '@chakra-ui/core/dist/Input';
import { useRecoilState } from 'recoil';
import { Card, CardDivider, CardText } from '../../../sharedComponents/Card';

interface CommentItemProps {
  commentKey: string;
}

export const CommentItem: FunctionComponent<CommentItemProps> = ({ commentKey }) => {
  const atom = useMemo(() => {
    const find = commentsMap.get(commentKey);
    if (!find) {
      throw new Error("Unconsistent state");
    }
    return find;
  }, [commentKey]);

  const [comment, setComment] = useRecoilState(atom);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const updatedComment = { ...comment, body: event.target.value };
      setComment(updatedComment);
    },
    [comment, setComment]
  );

  return (
    <Card marginTop="2" >
      <CardText text={comment.name} size="small" />
      <CardDivider marginBottom="2" />
      <Input defaultValue={comment.body} onChange={onChange} />
    </Card >
  );
}