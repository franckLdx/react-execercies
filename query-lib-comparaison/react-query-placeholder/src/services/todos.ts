import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Filter } from "../store/filter/filter";
import { getFilter } from "../store/filter/selectors";
import { get, patch } from "./fetchTools";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const TODOS_KEY = 'todos';

export const useTodos = () => useQuery<Array<Todo>>(
  TODOS_KEY,
  async () => await get('todos'),
  { staleTime: Infinity }
);


export const useUpdateTodo = () => {
  const updatePost = async (todo: Partial<Todo> & Pick<Todo, 'id'>) => await patch<Todo>(`todos/${todo.id}`, todo);
  const queryClient = useQueryClient();
  return useMutation(
    updatePost,
    {
      async onMutate(todo) {
        await queryClient.cancelQueries(TODOS_KEY);
        queryClient.setQueryData(
          'todos',
          todos => (todos as Array<Todo>).map(currentTodo => currentTodo.id === todo.id ? { ...todo, ...currentTodo } : todo)
        );
        return { todo };
      },
      // onSuccess() {
      //   queryClient.invalidateQueries(TODOS_KEY);
      // }
      onSettled() {
        queryClient.invalidateQueries(TODOS_KEY);
      }
    }
  );
}

const filterPredicates: Record<Filter, (todo: Todo) => boolean> = {
  'all': () => true,
  'done': ({ completed }) => completed,
  'undone': ({ completed }) => !completed,
}

export const useFilteredTodos = () => {
  const currentFilter = useSelector(getFilter);
  const { data: todos, ...queryProps } = useTodos();
  return useMemo(
    () => {
      const filteredTodos = todos?.filter(filterPredicates[currentFilter])
      return { data: filteredTodos, ...queryProps };
    },
    [currentFilter, queryProps, todos]
  );
}
