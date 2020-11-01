import { selectorFamily } from "recoil";
import { Comment, commentsState } from "./atoms";

type CommentStateProps = Readonly<{
  postId: number,
  commentId: number;
}>

export const commentState = selectorFamily<Comment | undefined, CommentStateProps>({
  key: 'commentState',
  get({ postId, commentId }) {
    const filterByName = commentFilterHOF(commentId);
    return async ({ get }) => {
      const comments = get(commentsState(postId));
      return comments.find(filterByName);
    }
  },
  set({ postId, commentId }) {
    const updater = updateCommentHOF(commentId);
    return ({ set, get }, newComment) => {
      const commentRecoilState = commentsState(postId);
      const oldcomments = get(commentRecoilState);
      const newComments = updater(oldcomments, newComment as Comment);
      set(commentRecoilState, newComments);
    }
  },
});

function commentFilterHOF(commentId: number) {
  return (comment: Comment) => comment.id === commentId;
}

function updateCommentHOF(commentId: number) {
  const filterById = commentFilterHOF(commentId);
  return (comments: Comment[], newComment: Comment) => {
    const index = comments.findIndex(filterById);
    if (index === -1) {
      throw new Error("Unconsistent state in comments");
    }
    return [...comments.slice(0, index), newComment as Comment, ...comments.slice(index + 1)];
  }
}