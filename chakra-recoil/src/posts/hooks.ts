import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PostsApi } from "../api/posts";
import { loadedPosts, loadingPosts, loadPostsError, postsModelAtom } from "./model";

export function useLoadPosts() {
  const [postsModel, setPostsModel] = useRecoilState(postsModelAtom);

  useEffect(() => {
    setPostsModel(loadingPosts)
    PostsApi.getAll()
      .then(posts => {
        const newPostsModel = loadedPosts(posts);
        setPostsModel(newPostsModel);
      })
      .catch(error => {
        const newPostsModel = loadPostsError(error);
        setPostsModel(newPostsModel);
      });
  }, [setPostsModel]);

  return postsModel;
}