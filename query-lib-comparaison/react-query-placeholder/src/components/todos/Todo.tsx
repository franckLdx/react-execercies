import React, { ChangeEvent, FC, useCallback, useMemo } from 'react'

import { Box, Text } from '@chakra-ui/layout';
import { Checkbox, Divider, Skeleton } from '@chakra-ui/react';
import { User } from './User';
import { useTodos, useUpdateTodo } from '../../services/todos';

const TodoContainer: FC = ({ children }) => (
  <article>
    <Box border="1px solid" paddingX="20px" paddingY="10px">
      {children}
    </Box>
  </article>
)

interface TodoProps {
  todoId: number
}

export const Todo: FC<TodoProps> = ({ todoId }) => {
  const loadTodo = useTodos();
  const todo = useMemo(
    () => loadTodo.data?.find(todo => todo.id === todoId),
    [loadTodo.data, todoId]
  )

  const updateTodo = useUpdateTodo();

  const onCompletedChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (!todo) {
        return;
      }
      const updatedTodo = { id: todo.id, completed: !todo.completed };
      updateTodo.mutate(updatedTodo);
    },
    [todo, updateTodo]
  );

  if (loadTodo.error) {
    throw loadTodo.error;
  }

  if (updateTodo.error) {
    throw updateTodo.error;
  }

  if (loadTodo.status === "loading" || updateTodo.status === "loading") {
    return <Skeleton height="160px"><TodoContainer /></Skeleton>
  }

  if (todo === undefined) {
    return (
      <TodoContainer>
        <Text fontSize="3xl">Not found</Text>
      </TodoContainer>
    )
  }

  return (
    <TodoContainer>
      <Text
        fontSize="3xl"
        noOfLines={3}
        height="4.5em">{
          todo.title}
      </Text>
      <Checkbox
        marginTop="10px"
        isChecked={todo.completed}
        onChange={onCompletedChange}
      >
        <Text fontSize="2xl">Done</Text>
      </Checkbox >
      <Divider
        marginY="10px"
      />
      <User
        key={todo.userId}
        userId={todo.userId}
      />
    </TodoContainer >
  )
}