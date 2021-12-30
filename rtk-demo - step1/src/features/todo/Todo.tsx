import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { TodoData } from './model';
import { getTodoById } from './todosSelectors';

interface TodoProps {
  id: number
}

export const Todo: FC<TodoProps> = ({ id }) => {
  const todo = useSelector<RootState, TodoData | undefined>((state) => getTodoById(state, id))
  return (<article>{todo?.title}</article>)
}