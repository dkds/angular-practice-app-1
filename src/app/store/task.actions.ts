import { Action } from '@ngrx/store';

export enum TaskActionType {
  ADD_TASK = '[Task] Add Task',
  UPDATE_TASK = '[Task] Update Task',
  DELETE_TASK = '[Task] Delete Task',
  UPDATE_TASK_STATUS = '[Task] Update Task Status',
}

export interface AddTaskAction extends Action {
  type: TaskActionType.ADD_TASK;
  payload: { title: string; description: string };
}
export interface UpdateTaskAction extends Action {
  type: TaskActionType.UPDATE_TASK;
  payload: { id: number; title?: string; description?: string };
}
export interface DeleteTaskAction extends Action {
  type: TaskActionType.DELETE_TASK;
  payload: { id: number };
}
export interface UpdateTaskStatusAction extends Action {
  type: TaskActionType.UPDATE_TASK_STATUS;
  payload: { id: number; completed: boolean };
}
export type TaskActions =
  | AddTaskAction
  | UpdateTaskAction
  | DeleteTaskAction
  | UpdateTaskStatusAction;
