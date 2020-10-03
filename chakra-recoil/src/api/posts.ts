import { get } from "./misc";

interface PostPayload {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface CommentPayload {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}


export const PostsApi = {
  async getAll(): Promise<PostPayload[]> {
    return await get("posts", `Failed to load posts`);
  },
  async get(postId: number): Promise<PostPayload> {
    const url = getPostUrl(postId);
    return await get(url, `Failed to load post ${postId}`);
  },
  async getComments(postId: number): Promise<CommentPayload[]> {
    const url = `${getPostUrl(postId)}/comments`;
    return await get(url, `Failed to load post comments of post ${postId}`);
  }
};

const getPostUrl = (postId: number) => `posts/${postId}`;