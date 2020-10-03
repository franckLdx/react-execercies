import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { ExtraBorder } from '../../../sharedComponents/ExtraBorder';
import { commentsMap, loadComments } from '../../../state/comment';
import Text from "@chakra-ui/core/dist/Text";
import { AppDivider } from '../../../sharedComponents/AppDivider';
import Input from '@chakra-ui/core/dist/Input';
import { useRecoilState } from 'recoil';
import { getPost, Post } from '../../../state/post';

interface CommentsProps {
  postId: number;
}

export const Comments: FunctionComponent<CommentsProps> = ({ postId }) => {
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
    <ExtraBorder>
      <Text color="app.main" fontSize="3xl" fontWeight="app.bold"> Comments:</Text>
      {
        post?.commentKeys?.map(commentKey => <CommentItem key={commentKey} commentKey={commentKey} />)
      }
      {post?.commentKeys === undefined ? "Please wait" : ""}
    </ExtraBorder>
  )
}

interface CommentItemProps {
  commentKey: string;
}
const CommentItem: FunctionComponent<CommentItemProps> = ({ commentKey }) => {
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
    <ExtraBorder marginTop="5" >
      <Text>
        {comment.name}
      </Text>
      <AppDivider />
      <Input defaultValue={comment.body} onChange={onChange} />
    </ExtraBorder>
  );
}