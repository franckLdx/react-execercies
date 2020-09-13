import { Post } from "../posts/model";
import { get } from "./misc";

export const PostsApi = {
  async getAll(): Promise<Post[]> {
    const response = await get("posts");
    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.status}/${response.statusText}`);
    }
    return await response.json();
  },
};
