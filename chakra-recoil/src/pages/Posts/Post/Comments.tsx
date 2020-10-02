import React, { FunctionComponent } from 'react';
import { ExtraBorder } from '../../../sharedComponents/ExtraBorder';
import Text from "@chakra-ui/core/dist/Text";
import { useLoadComments, Comment } from '../../../state/comment';
import PseudoBox from '@chakra-ui/core/dist/PseudoBox';
import { AppDivider } from '../../../sharedComponents/AppDivider';

interface CommentsProps {
  postId: number;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
  const [comments, loading] = useLoadComments(postId);
  return (
    <ExtraBorder>
      <Text color="app.main" fontSize="3xl" fontWeight="app.bold"> Comments:</Text>
      {
        comments?.map(comment => <CommentItem key={comment.id} comment={comment} />)
      }
      {loading === 'loading' ? "Please wait" : ""}
      {loading === 'error' ? "BOOM" : ""}
    </ExtraBorder>
  )
}

interface CommentItemProps {
  comment: Comment
}
const CommentItem: FunctionComponent<CommentItemProps> = ({ comment }) => (
  <PseudoBox as="article" >
    <Text>
      {comment.name}
    </Text>
    <AppDivider />
    {comment.body}
  </PseudoBox>
);
