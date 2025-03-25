import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { addTask } from '../../store/task.actions';
import { TaskState } from '../../store/task.reducer';
import { searchTasks } from '../../store/task.selectors';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    AsyncPipe,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  tasks$: Observable<Task[]>;
  private fb = inject(FormBuilder);
  taskForm = this.fb.group({
    name: [null, Validators.required],
  });

  constructor(private store: Store<TaskState>) {
    this.tasks$ = this.store.select(searchTasks);
    this.store.select(state => state.tasks).subscribe((tasks) => {
      console.log('searchTasks', tasks);
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const value = this.taskForm.value.name as unknown as string;
      const task = { id: 1, title: value, completed: false };
      console.log(task);
      this.store.dispatch(addTask({ task }));
      alert(`Task ${task.title} added successfully!`);
      this.taskForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
