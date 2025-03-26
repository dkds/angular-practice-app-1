import { createReducer, on } from '@ngrx/store';
import { addTask } from './task.actions';
import { Task } from '../models/task.model';

export interface TaskState {
  searchQuery: string;
  tasks: Task[];
}
const initialState: TaskState = {
  searchQuery: '',
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => {
    return {
      ...state,
      tasks: [...state.tasks, task],
    };
  })
);
