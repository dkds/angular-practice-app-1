import { Action, createAction } from '@ngrx/store';

export enum TaskActionType {
  LOAD_TASKS = '[Task] Load Tasks',
  ADD_TASK = '[Task] Add Task',
  UPDATE_TASK = '[Task] Update Task',
  DELETE_TASK = '[Task] Delete Task',
  UPDATE_TASK_STATUS = '[Task] Update Task Status',
}

export const loadTasks = createAction(TaskActionType.LOAD_TASKS, );
