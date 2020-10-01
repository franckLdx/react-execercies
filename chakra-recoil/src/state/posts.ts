import { useEffect } from "react";
import { atom, selector, useRecoilState } from "recoil";
import { PostsApi } from "../api/posts";
import { LoadingState } from "./loadingState";
import { Post } from "./post";

export type Posts = Post[];

export const postsAtom = atom<Posts>({
  key: "posts",
  default: [],
});

export interface PostsMetadata {
  loadingState: LoadingState,
  error: Error | undefined;
  loadedDate: number | undefined;
}

export const postsMetaDataAtom = atom<PostsMetadata>({
  key: "postsMetaData",
  default: {
    loadingState: 'none',
    error: undefined,
    loadedDate: undefined
  }
});

interface LoadPostsProps {
  setPosts: (posts: Posts) => void
  metaData: PostsMetadata,
  setMetaData: (metaData: PostsMetadata) => void,
}

export async function loadPosts(force: boolean, { setPosts, metaData, setMetaData }: LoadPostsProps) {
  if (metaData.loadingState !== 'none' && !force) {
    return
  }
  try {
    setMetaData({ loadingState: 'loading', error: undefined, loadedDate: undefined });
    const receivedPosts = await PostsApi.getAll();
    setMetaData({ loadingState: 'loaded', error: undefined, loadedDate: Date.now() });
    setPosts(receivedPosts);
  } catch (error) {
    setMetaData({ loadingState: 'error', error: error, loadedDate: undefined });
  }
}

export function useLoadPosts() {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [metaData, setMetaData] = useRecoilState(postsMetaDataAtom);

  useEffect(() => {
    loadPosts(false, { setPosts, metaData, setMetaData })
  }, [metaData, setMetaData, setPosts]);

  return [posts, metaData] as const;
}

export const filterPosts = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const filteredPosts = selector<Posts>({
  key: "postsFiltered",
  get({ get }) {
    const posts = get(postsAtom);
    const filter = canonicalString(get(filterPosts));
    if (filter === null || filter === undefined || filter === '') {
      return posts;
    }
    return posts.filter(post => canonicalString(post.title)?.includes(filter))
  }
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()

