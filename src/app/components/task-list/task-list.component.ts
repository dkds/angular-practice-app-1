import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { AsyncPipe } from '@angular/common';
import { TaskState } from '../../store/task.reducer';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<TaskState>) {
    this.tasks$ = this.store.select('tasks');
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
    this.store.dispatch({ type: 'TOGGLE_TASK', payload: task });
  }
  deleteTask(task: Task): void {
    this.store.dispatch({ type: 'DELETE_TASK', payload: task });
  }
}
