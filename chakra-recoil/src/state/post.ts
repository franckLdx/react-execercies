import { useEffect } from "react";
import { atom, selectorFamily, useRecoilState } from "recoil";
import { PostsApi } from "../api/posts";
import { LoadingState } from "./loadingState";
import { postsAtom } from "./posts";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  commentKeys?: string[];
}

export interface PostMetadata {
  loadingState: LoadingState,
  error: Error | undefined;
}

export const postMetaDataAtom = atom<PostMetadata>({
  key: "postMetaData",
  default: {
    loadingState: 'none',
    error: undefined,
  }
});

export const useLoadPost = (postId: number) => {
  const [post, setPost] = useRecoilState(getPost(postId));
  const [metaData, setMetaData] = useRecoilState(postMetaDataAtom)

  useEffect(() => {
    if (post !== undefined) {
      setMetaData({ loadingState: 'loaded', error: undefined });
      return;
    }
    setMetaData({ loadingState: 'loading', error: undefined });
    PostsApi.get(postId).then(post => {
      setMetaData({ loadingState: 'loaded', error: undefined });
      setPost(post)
    }).catch(error => setMetaData({ loadingState: 'error', error }));
  }, [postId, post, setMetaData, setPost])

  return [post, metaData] as const;
}

export const getPost = selectorFamily<Post | undefined, number>({
  key: "getPost",
  get: (id) => ({ get }) => {
    const posts = get(postsAtom);
    return posts.find(post => post.id === id);
  },
  set: (_) => ({ get, set }, post) => {
    if (post === undefined) {
      return;
    }
    const posts = get(postsAtom);
    const updated = [
      ...posts.filter(current => (post as Post).id !== current.id),
      post
    ] as Post[];
    set(postsAtom, updated);
  }
});