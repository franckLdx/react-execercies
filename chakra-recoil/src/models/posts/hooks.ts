import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { PostsApi } from "../../api/posts";
import { filteredPosts, loadingErrorAtom, loadingStateAtom, postsAtom } from "./model";
import { getPost } from "./selectors";

export function useLoadPosts() {
  const setPosts = useSetRecoilState(postsAtom);
  const posts = useRecoilValue(filteredPosts);
  const [loadingState, setLoadingState] = useRecoilState(loadingStateAtom);
  const [loadingError, setLoadingError] = useRecoilState(loadingErrorAtom);

  useEffect(() => {
    if (loadingState !== 'none') {
      return
    }
    setLoadingState('loading');
    PostsApi.getAll()
      .then(receivedPosts => {
        setLoadingState('loaded');
        setPosts(receivedPosts);
      })
      .catch(error => {
        setLoadingState('error');
        setLoadingError(error);
      });
  }, [loadingState, setLoadingError, setLoadingState, setPosts]);

  return [posts, loadingState, loadingError] as const;
}

export const useLoadPost = (id: number) => {
  const [post, setPost] = useRecoilState(getPost(id));
  const [loadingState, setLoadingState] = useRecoilState(loadingStateAtom)
  const [loadingError, setLoadingError] = useRecoilState(loadingErrorAtom)
  const resetLoadingError = useResetRecoilState(loadingErrorAtom)

  useEffect(() => {
    if (post !== undefined) {
      return;
    }
    setLoadingState('loading');
    resetLoadingError();
    PostsApi.get(id).then(post => {
      setLoadingState('loaded');
      setPost(post)
    }).catch(setLoadingError);
  }, [id, post, resetLoadingError, setLoadingError, setLoadingState, setPost])

  return [post, loadingState, loadingError] as const;
}