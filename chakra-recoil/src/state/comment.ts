import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { PostsApi } from "../api/posts";
import { LoadingState } from "./loadingState";
import { getPost } from "./post";

export interface Comment {
  id: number,
  name: string,
  email: string,
  body: string,
}

export function useLoadComments(postId: number) {
  const [loadingState, setLoadingState] = useState<LoadingState>('none');
  const [post, setPost] = useRecoilState(getPost(postId));

  useEffect(
    () => {
      if (loadingState !== "none") {
        return;
      }
      if (post === undefined) {
        setLoadingState('error');
        return;
      }
      if (post.comments !== undefined) {
        setLoadingState('loaded');
        return;
      }
      setLoadingState('loading');
      PostsApi.getComments(postId)
        .then(comments => {
          setPost({ ...post, comments });
          setLoadingState('loaded');
        })
        .catch(err => {
          console.error(err);
          setLoadingState('error');
        });
    },
    [loadingState, post, postId, setPost]
  );

  return [post?.comments, loadingState] as const;
}