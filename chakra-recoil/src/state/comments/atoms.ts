import { AtomEffect, atomFamily } from "recoil";
import { PostsApi } from "../../api/posts";

export interface Comment {
  id: number;
  name: string,
  body: string,
  email: string,
}

function commentEffetHOF(postId: number): AtomEffect<Comment[]> {
  return ({ onSet }) => {
    onSet(async (newComments) => {
      try {
        await PostsApi.update(postId, newComments as Comment[]);
        // eslint-disable-next-line no-empty
      } catch (err) {

      }
      return newComments;
    });
  };
}



export const commentsState = atomFamily<Comment[], number>({
  key: 'comments',
  default: PostsApi.getComments,
  effects_UNSTABLE: postId => [commentEffetHOF(postId)]
});

