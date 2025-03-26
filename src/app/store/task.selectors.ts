import { createSelector } from '@ngrx/store';
import { AppState } from '.';
import { Task } from '../models/task.model';

export const allTasks = (state: AppState) => state.task?.tasks || [];
export const searchQuery = (state: AppState) => state.task?.searchQuery || '';

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
