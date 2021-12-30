import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Todo } from './Todo';
import { getTodoIds, getTodoStatus } from './todosSelectors';
import { fetchTodoThunks } from './todosSlice';

export const Todos: FC = () => {
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(fetchTodoThunks()) },
    [dispatch]
  );

  const status = useSelector(getTodoStatus);
  const todoIds = useSelector(getTodoIds);

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h1>TODO</h1>
      {todoIds.map(id => <Todo id={id} />)}
    </section >
  );
}