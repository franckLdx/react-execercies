import { selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Post } from "../../model";
import { filterPostsState } from "./atoms";

export const postsState = selector<Post[]>({
  key: "posts",
  get: async () => await PostsApi.getAll(),
});

export const filteredPostsState = selector<Post[]>({
  key: "postsFiltered",
  get({ get }) {
    const posts = get(postsState);
    const filter = canonicalString(get(filterPostsState));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  }
});

export const postByIdState = selectorFamily<Post | undefined, number>({
  key: "postById",
  get(postId) {
    return ({ get }) => {
      const posts = get(postsState);
      return posts.find(post => post.id === postId);
    }
  },
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()


// export const postsStateWithRequestId = selectorFamily<Post[], number>({
//   key: "postsListWhithRequestId",
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   get(requestId: number) { return async () => await PostsApi.getAll() },
// });

// export const filteredPostsStateWithTriggerCounter = selector<Post[]>({
//   key: "postsFiltered",
//   async get({ get }) {
//     const requestId = get(postsRequestIdState)
//     const posts = get(postsStateWithRequestId(requestId));
//     const filter = canonicalString(get(filterPostsState));
//     return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
//   },
// });

// export const postsAtom = atom<Post[]>({
//   key: "postsAtom",
//   default: []
// })

// export const useLoadPost = () => useRecoilCallback(
//     ({ set }) => async () => {
//       const posts = await PostsApi.getAll();
//       set(postsAtom, posts);
//       set(loadedPostsDateState, new Date())
//     },
//     []
//   )
