import { Post, Comment } from "../state";
import { get, put } from "./misc";

type PostsPayload = Post[];

interface CommentPayload {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export const PostsApi = {
  async getAll(): Promise<Post[]> {
    return await get<PostsPayload>("posts", `Failed to load posts`);
  },

  async getComments(postId: number): Promise<Comment[]> {
    const url = getCommentsUrl(postId);
    const commentsPayload = await get<CommentPayload[]>(url, `Failed to load post comments of post ${postId}`);
    return mapToComments(commentsPayload);
  },

  async update(postId: number, comments: Comment[]): Promise<Comment[]> {
    const url = getCommentsUrl(postId);
    const commentsPayload = await put<CommentPayload[]>(url, comments, `Failed to update post comments of post ${postId}`);
    return mapToComments(commentsPayload);
  },

};

const getPostUrl = (postId: number) => `posts/${postId}`;

const getCommentsUrl = (postId: number) => `${getPostUrl(postId)}/comments`;

const mapToComments = (commentsPayload: CommentPayload[]) => commentsPayload.map(mapToComment);

const mapToComment = ({ id, name, body, email }: CommentPayload): Comment => ({ id, name, body, email })