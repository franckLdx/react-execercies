import { atom, atomFamily, RecoilState } from "recoil";
import { PostsApi } from "../api/posts";

export interface Comment {
  name: string,
  email: string,
  body: string,
}

export const commentsAtom = atomFamily<Comment[], number>({
  key: 'comments',
  default: PostsApi.getComments
});

export const commentsMap = new Map<string, RecoilState<Comment>>()

export const getCommentKey = (postId: number, commentId: number) => `${postId}_${commentId}`;

export async function loadComments(postId: number) {
  const rawComments = await PostsApi.getComments(postId);
  const commentKeys = rawComments.map(({ id: commentId, name, body, email }) => {
    const commentKey = getCommentKey(postId, commentId);
    const comment: Comment = { name, body, email };
    const commentAtom = atom<Comment>({ key: commentKey, default: comment })
    commentsMap.set(commentKey, commentAtom);
    return commentKey;
  });
  return commentKeys;
}