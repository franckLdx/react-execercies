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

export const useLoadPost = (id: number) => {
  const [post, setPost] = useRecoilState(getPost(id));
  const [metaData, setMetaData] = useRecoilState(postMetaDataAtom)

  useEffect(() => {
    if (post !== undefined) {
      setMetaData({ loadingState: 'loaded', error: undefined });
      return;
    }
    setMetaData({ loadingState: 'loading', error: undefined });
    PostsApi.get(id).then(post => {
      setMetaData({ loadingState: 'loaded', error: undefined });
      setPost(post)
    }).catch(error => setMetaData({ loadingState: 'error', error }));
  }, [id, post, setMetaData, setPost])

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
    set(postsAtom, [...posts, post as Post]);
  }
});