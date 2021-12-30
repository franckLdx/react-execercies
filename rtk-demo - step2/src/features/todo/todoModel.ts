import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";

export interface TodoData {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const todosAdapter = createEntityAdapter<TodoData>({
  selectId: (todo) => todo.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})


export type TodoAdapterType = EntityState<TodoData>