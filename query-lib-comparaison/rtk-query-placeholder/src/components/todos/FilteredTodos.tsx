import React, { FC } from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import type { Filter } from '../../store/filter/filter';
import { getFilter } from '../../store/filter/selectors';
import { useGetTodosQuery } from '../../service';
import { Loading } from '../Loading';
import { Todo } from './Todo';
import type { Todo as TodoType } from '../../service';

const filterPredicates: Record<Filter, (todo: TodoType) => boolean> = {
  'all': () => true,
  'done': ({ completed }) => completed,
  'undone': ({ completed }) => !completed,
}

export const FilteredTodos: FC = () => {
  const currentFilter = useSelector(getFilter);
  const { data: todos, isLoading, error } = useGetTodosQuery(undefined, {
    selectFromResult: ({ data: todos, isLoading, error }) => ({
      data: todos?.filter(filterPredicates[currentFilter]), isLoading, error
    })
  });

  if (error) {
    throw error;
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10}>
        {todos?.map(({ id }) => <Todo key={id} todoId={id} />)}
      </SimpleGrid>
    </section>
  )
};