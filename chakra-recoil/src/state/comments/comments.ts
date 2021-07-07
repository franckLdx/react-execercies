import { AtomEffect, atomFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Comment } from './definitions'

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
  default: async postId => await PostsApi.getComments(postId),
  effects_UNSTABLE: postId => [commentEffetHOF(postId)]
});

