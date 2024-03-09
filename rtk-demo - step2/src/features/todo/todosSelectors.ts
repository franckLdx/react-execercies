import { createSelector, EntityId } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { todosAdapter } from "./todoModel";

export const getTodosState = (state: RootState) => state.todos

export const getTodosEntity = (state: RootState) => getTodosState(state).todosEntity

export const getTodoStatus = (state: RootState) => getTodosState(state).status;

const entiySelectors = todosAdapter.getSelectors();

export const getTodoIds = (state: RootState) => entiySelectors.selectIds(getTodosEntity(state));

//export const getTodoById = (state: RootState, id: EntityId) => entiySelectors.selectById(getTodosEntity(state), id);
export const getTodoById = (id: EntityId) => createSelector([getTodosEntity], todosEntity => entiySelectors.selectById(todosEntity, id))
