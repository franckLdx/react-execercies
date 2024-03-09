import React, { ChangeEvent, FC, useCallback } from 'react'

import { Box, Text } from '@chakra-ui/layout';
import { useGetTodosQuery, useUpdateCompletedMutation } from '../../service';
import { Checkbox, Divider } from '@chakra-ui/react';
import { User } from './User';

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
  const { data: todo } = useGetTodosQuery(
    undefined,
    {
      selectFromResult: ({ data: todos }) => ({ data: todos?.find(todo => todo.id === todoId) })
    }
  );
  const [updatePost, { error }] = useUpdateCompletedMutation();

  const onCompletedChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => updatePost({ todoId, completed: event.target.checked }),
    [todoId, updatePost]
  );

  if (error) {
    throw error;
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
        onChange={onCompletedChange}>
        <Text fontSize="2xl">Done</Text>
      </Checkbox>
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