import React, { FC } from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { useGetTodosQuery } from '../../service';
import { Loading } from '../Loading';
import { Todo } from './Todo'

export const Todos: FC = () => {
  const { data: todos, error, isLoading, isFetching } = useGetTodosQuery();

  if (error) {
    throw error;
  }

  if (isLoading || isFetching) {
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