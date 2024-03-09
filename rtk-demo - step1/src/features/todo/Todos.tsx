import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './Todo';
import { getTodosState } from './todosSelectors';
import { fetchTodoThunks } from './todosSlice';

export const Todos: FC = () => {
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(fetchTodoThunks()) },
    [dispatch]
  );

  const todosState = useSelector(getTodosState);

  if (todosState.status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h1>TODO</h1>
      {todosState.todos.map(({ id }) => <Todo id={id} />)}
    </section >
  );
}