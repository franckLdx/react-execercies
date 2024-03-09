import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoAdapterType, todosAdapter } from "./todoModel";
import { fetchTodos } from "./todosApi";

export const fetchTodoThunks = createAsyncThunk(
  'todos/fetch',
  async () => await fetchTodos()
);

export interface TodosState {
  status: 'idle' | 'loading' | 'error'
  todosEntity: TodoAdapterType
}

const initialState: TodosState = {
  status: 'idle',
  todosEntity: todosAdapter.getInitialState(),
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
        todosAdapter.setAll(state.todosEntity, action.payload);
      })
      .addCase(fetchTodoThunks.rejected, (state) => {
        state.status = 'error';
        state.todosEntity = todosAdapter.getInitialState();
      });
  },
});

export const { reducer: todosReducer } = todosSlice

