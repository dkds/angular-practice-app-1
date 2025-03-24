import { createSelector } from '@ngrx/store';
import { Task } from '../models/task.model';
import { TaskState } from './task.reducer';

export const allTasks = (state: TaskState) => state.tasks;
export const searchQuery = (state: TaskState) => state.searchQuery;
export const searchTasks = createSelector(
  searchQuery,
  allTasks,
  (searchQuery: string, allTasks: Task[]) => {
    console.log('Search query:', searchQuery);
    console.log('All tasks:', allTasks);
    if (searchQuery && allTasks) {
      return allTasks.filter((task: Task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return allTasks;
  }
);
