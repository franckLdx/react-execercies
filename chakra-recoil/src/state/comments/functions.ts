import { atomFamily, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Comment } from "./atoms";

export const getCommentKey = (postId: number, commentId: number) => `${postId}_${commentId}`;

export const commentsAtom = atomFamily<Comment[], number>({
  key: 'comments',
  default: PostsApi.getComments
});

export const commentsByPostIdState = selectorFamily<Comment[], number>({
  key: 'commentsByPostId',
  get(postId) { return async () => PostsApi.getComments(postId) },
});
