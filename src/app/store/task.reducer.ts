import { createReducer, on } from '@ngrx/store';
import { addTask } from './task.actions';
import { Task } from '../models/task.model';

export interface TaskState {
  tasks: Task[];
}
const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
);
