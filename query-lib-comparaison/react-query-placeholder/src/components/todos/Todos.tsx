import React, { FC } from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { Loading } from '../Loading';
import { Todo } from './Todo'
import { Todo as TodoType } from '../../service/placeHolder'
import { useApplyFilteredTodos } from '../../service/placeHolder/todos';
import { myFetch } from '../../service/placeHolder/common';
import { useQuery } from 'react-query';

export const Todos: FC = () => {
  const { status, data: todos, error } = useQuery<Array<TodoType>>(
    'todos',
    async () => await myFetch('todos'),
    { staleTime: Infinity }
  );
  const fiteredTodos = useApplyFilteredTodos(todos || []);

  if (error) {
    throw error;
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <section>
      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10}>
        {fiteredTodos?.map(({ id }) => <Todo key={id} todoId={id} />)}
      </SimpleGrid>
    </section>
  )
};