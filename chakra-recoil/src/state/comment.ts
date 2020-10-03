import { atomFamily } from "recoil";
import { PostsApi } from "../api/posts";

export interface Comment {
  id: number,
  name: string,
  email: string,
  body: string,
}

export const commentsAtom = atomFamily<Comment[], number>({
  key: 'comments',
  default: PostsApi.getComments
});