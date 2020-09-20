import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PostsApi } from "../../../api/posts";
import { postsAtom } from "../../misc/model";
import { loadingErrorAtom, loadingStateAtom } from "./model";

export function useLoadPosts() {
  const [posts, setPosts] = useRecoilState(postsAtom);
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