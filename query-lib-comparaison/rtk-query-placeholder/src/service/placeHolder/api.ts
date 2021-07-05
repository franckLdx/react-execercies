import type { TagDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Todo, User } from './model';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://jsonplaceholder.typicode.com' });

const todoListTag = (): TagDescription<"Todo"> => ({ type: 'Todo', id: 'LIST' })
// const todoTag = (todoId: number): TagDescription<"Todo"> => ({ type: 'Todo', id: todoId })
const userTag = (userId: number): TagDescription<"User"> => ({ type: 'User', id: userId })

export const placeHolderApi = createApi({
  baseQuery,
  reducerPath: 'placeHolder',
  tagTypes: ['Todo', 'User', 'Users'],
  endpoints: (builder) => ({

    getTodos: builder.query<Array<Todo>, void>({
      query: () => 'todos',
      providesTags: [todoListTag()]
    }),

    getUser: builder.query<User, number>({
      query: (userId) => `users/${userId}`,
      transformResponse: (response: any) => ({
        id: response.id,
        name: response.name,
        userName: response.username,
        email: response.email,
      }),
      providesTags: (_user, _error, userId) => [userTag(userId)],
    }),

    updateCompleted: builder.mutation<Todo, { todoId: number, completed: boolean }>({
      // query: ({ todoId, completed }) => ({
      //   url: `todos/${todoId}`,
      //   method: 'PATCH',
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      //   body: { completed },
      //   invalidatesTags: (_todo: Todo, _error: any, todoId: number) => [todoListTag(), todoTag(todoId)],
      // }),


      queryFn: ({ todoId, completed }) => {
        const newTodo: Todo = { id: todoId, title: "generated", completed, userId: 1 }
        return {
          data: newTodo
        };
      },
      invalidatesTags: [todoListTag()],
      async onQueryStarted({ todoId, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          placeHolderApi.util.updateQueryData('getTodos', undefined, (draft) => {
            const index = draft.findIndex(todo => todo.id === todoId)
            if (index !== -1) {
              draft[index] = { ...draft[index], ...patch }
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    })

  })

})

export const placeHolderReducer = placeHolderApi.reducer;

export const { useGetTodosQuery, useGetUserQuery, useUpdateCompletedMutation } = placeHolderApi
