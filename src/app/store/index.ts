import { taskReducer, TaskState } from './task.reducer';

export const reducers = {
  taskReducer,
};

export type AppState = {
  task: TaskState;
};