import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { ExtraBorder } from '../../../sharedComponents/ExtraBorder';
import { Comment, commentsAtom } from '../../../state/comment';
import Text from "@chakra-ui/core/dist/Text";
import { AppDivider } from '../../../sharedComponents/AppDivider';
import Input from '@chakra-ui/core/dist/Input';
import { useRecoilState, useRecoilValue } from 'recoil';

interface CommentsProps {
  postId: number;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
  const comments = useRecoilValue(commentsAtom(postId));
  return (
    <ExtraBorder>
      <Text color="app.main" fontSize="3xl" fontWeight="app.bold"> Comments:</Text>
      {
        comments?.map(comment => <CommentItem key={comment.id} postId={postId} comment={comment} />)
      }
      {comments === undefined ? "Please wait" : ""}
    </ExtraBorder>
  )
}

interface CommentItemProps {
  postId: number;
  comment: Comment;
}
const CommentItem: FunctionComponent<CommentItemProps> = ({ postId, comment }) => {
  const [comments, setComments] = useRecoilState(commentsAtom(postId));
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const index = comments.findIndex(current => current.id === comment.id);
      if (index === -1) {
        return;
      }
      const updatedComment = { ...comment, body: event.target.value };
      const updatedComments = [...comments.slice(0, index), updatedComment, ...comments.slice(index + 1)]
      setComments(updatedComments);
    },
    [comment, comments, setComments]
  );
  return (
    <ExtraBorder marginTop="5" >
      <Text>
        {comment.name}
      </Text>
      <AppDivider />
      <Input defaultValue={comment.body} onChange={onChange} />
    </ExtraBorder>
  );
}