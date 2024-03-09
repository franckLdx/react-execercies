import { RootState } from "../../app/store";

export const getTodosState = (state: RootState) => state.todos

export const getTodos = (state: RootState) => getTodosState(state).todos

export const getTodoById = (state: RootState, id: number) => getTodos(state).find(todo => todo.id === id)