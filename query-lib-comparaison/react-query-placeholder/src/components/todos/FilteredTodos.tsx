import React, { FC } from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { Loading } from '../Loading';
import { Todo } from './Todo';
import { useFilteredTodos } from '../../service/placeHolder/todos';

export const FilteredTodos: FC = () => {
  const { data: todos, isLoading, error } = useFilteredTodos();

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