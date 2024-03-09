import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoData } from "./model";
import { fetchTodos } from "./todosApi";

export const fetchTodoThunks = createAsyncThunk(
  'todos/fetch',
  async () => await fetchTodos()
);

export interface TodosState {
  status: 'idle' | 'loading' | 'error'
  todos: Array<TodoData>
}

const initialState: TodosState = {
  status: 'idle',
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoThunks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodoThunks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload;
      })
      .addCase(fetchTodoThunks.rejected, (state, action) => {
        state.status = 'error';
        state.todos = []
      });
  },
});

export const { reducer: todosReducer } = todosSlice

