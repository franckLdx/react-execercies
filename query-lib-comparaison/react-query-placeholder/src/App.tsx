import React, { FC } from 'react';

import { Box, Divider } from '@chakra-ui/react';
import { TodoFilter, Todos } from './components/todos/';

export const App: FC = () => (
  <main>
    <Box margin="20px">
      <TodoFilter />
      <Divider marginY="10px" />
      <Todos />
    </Box>
  </main>
);
