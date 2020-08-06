import { Post } from "../posts/model";

export const loadPosts = async (setPosts: (posts: Post[]) => void) => {
  const posts = await PostsApi.get();
  setPosts(posts);
};

export const PostsApi = {
  async get() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to load posts");
    }
    return await response.json();
  },
};
