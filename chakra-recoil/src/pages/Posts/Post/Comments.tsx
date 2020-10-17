import React, { FunctionComponent } from 'react';
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilValue } from 'recoil';
import { CommentItem } from './CommentItem';
import { BoxProps } from '@chakra-ui/core';
import { postByIdState } from '../../../state/posts';

type CommentsProps = {
  postId: number;
} & Pick<BoxProps, 'paddingTop'>

export const Comments: FunctionComponent<CommentsProps> = ({ postId, ...props }) => {
  const post = useRecoilValue(postByIdState(postId));

  // useEffect(() => {
  //   loadComments(postId).then(commentKeys => {
  //     const updatedPost: Post = { ...post, commentKeys };
  //     setPost(updatedPost);
  //   }
  // }, [post, postId, setPost]);

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
