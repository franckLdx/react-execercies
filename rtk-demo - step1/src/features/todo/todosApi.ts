import { TodoData } from "./model";

export const fetchTodos = async (): Promise<Array<TodoData>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error(`Failed to load todos ${response.statusText}`)
  }
  return await response.json() as Array<TodoData>;
}
