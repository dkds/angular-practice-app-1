import { Action, createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum TaskActionType {
  LOAD_TASKS = '[Task] Load Tasks',
  ADD_TASK = '[Task] Add Task',
  UPDATE_TASK = '[Task] Update Task',
  DELETE_TASK = '[Task] Delete Task',
  UPDATE_TASK_STATUS = '[Task] Update Task Status',
}

export const loadTasks = createAction(
  TaskActionType.LOAD_TASKS,
  props<{ query: string }>()
);
export const addTask = createAction(
  TaskActionType.ADD_TASK,
  props<{ task: Task }>()
);
export const updateTask = createAction(
  TaskActionType.UPDATE_TASK,
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  TaskActionType.DELETE_TASK,
  props<{ id: number }>()
);
export const updateTaskStatus = createAction(
  TaskActionType.UPDATE_TASK_STATUS,
  props<{ id: number; completed: boolean }>()
);
