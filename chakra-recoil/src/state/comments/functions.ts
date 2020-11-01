import { selectorFamily } from "recoil";
import { Comment, commentsAtom } from "./atoms";

export const getCommentKey = (postId: number, commentId: number) => `${postId}_${commentId}`;

type CommentStateProps = Readonly<{
  postId: number,
  commentName: string;
}>

export const commentState = selectorFamily<Comment | undefined, CommentStateProps>({
  key: 'commentState',
  get({ postId, commentName }) {
    const filterByName = commentNameFilterHOF(commentName);
    return async ({ get }) => {
      const comments = get(commentsAtom(postId));
      return comments.find(filterByName);
    }
  },
  set({ postId, commentName }) {
    const updater = updateCommentHOF(commentName);
    return ({ set, get }, newComment) => {
      const commentsState = commentsAtom(postId);
      const oldcomments = get(commentsState);
      const newComments = updater(oldcomments, newComment as Comment);
      set(commentsState, newComments);
    }
  },
});

function commentNameFilterHOF(commentName: string) {
  return (comment: Comment) => comment.name === commentName;
}

function updateCommentHOF(commentName: string) {
  const filterByName = commentNameFilterHOF(commentName);
  return (comments: Comment[], newComment: Comment) => {
    const index = comments.findIndex(filterByName);
    if (index === -1) {
      throw new Error("Unconsistent state in comments");
    }
    return [...comments.slice(0, index), newComment as Comment, ...comments.slice(index + 1)];
  }
}