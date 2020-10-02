import { Comment } from "../state/comment";
import { Post } from "../state/post";
import { get } from "./misc";

export const PostsApi = {
  async getAll(): Promise<Post[]> {
    return await get("posts", `Failed to load posts`);
  },
  async get(postId: number): Promise<Post> {
    const url = getPostUrl(postId);
    return await get(url, `Failed to load post ${postId}`);
  },
  async getComments(postId: number): Promise<Comment[]> {
    const url = `${getPostUrl(postId)}/comments`;
    return await get(url, `Failed to load post comments of post ${postId}`);
  }
};

const getPostUrl = (postId: number) => `posts/${postId}`;