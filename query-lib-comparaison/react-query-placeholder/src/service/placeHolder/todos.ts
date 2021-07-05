import { useMemo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Filter } from "../../store/filter/filter";
import { getFilter } from "../../store/filter/selectors";
import { myFetch } from "./common";
import { Todo } from "./model";

export const TODOS_KEY = 'todos';

export const useTodos = () => useQuery<Array<Todo>>(
  TODOS_KEY,
  async () => await myFetch('todos'),
  { staleTime: Infinity }
);

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

export const useApplyFilteredTodos = (todos: Array<Todo>) => {
  const currentFilter = useSelector(getFilter);
  return useMemo(
    () => todos?.filter(filterPredicates[currentFilter]),
    [currentFilter, todos]
  );
}