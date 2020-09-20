import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { PostsApi } from "../../../api/posts";
import { loadingErrorAtom, loadingStateAtom } from "../../List/misc/model";
import { getPost } from "../../misc/model";

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