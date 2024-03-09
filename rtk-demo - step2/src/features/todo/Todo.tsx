import React, { FC, useMemo } from 'react';

import { EntityId } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { TodoData } from './todoModel';
import { getTodoById } from './todosSelectors';

interface TodoProps {
  id: EntityId
}

export const Todo: FC<TodoProps> = ({ id }) => {
  const getTodo = useMemo(() => getTodoById(id), [id])
  const todo = useSelector<RootState, TodoData | undefined>(getTodo)
  return <article>{todo?.title}</article>
}