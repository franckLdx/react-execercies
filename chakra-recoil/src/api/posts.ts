import { Post } from "../pages/Posts/misc/model";
import { get } from "./misc";

export const PostsApi = {
  async getAll(): Promise<Post[]> {
    const response = await get("posts");
    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.status}/${response.statusText}`);
    }
    return await response.json();
  },
  async get(postId: number): Promise<Post> {
    const response = await get(`posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Failed to load post ${postId}: ${response.status}/${response.statusText}`);
    }
    return await response.json();
  },
};
