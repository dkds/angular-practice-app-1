import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { addTask } from '../../store/task.actions';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
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
  constructor(public store: Store) {}

  private fb = inject(FormBuilder);
  taskForm = this.fb.group({
    name: [null, Validators.required],
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      const value = this.taskForm.value.name as unknown as string;
      const task = { id: 1, title: value, completed: false };
      console.log(task);
      this.store.dispatch(addTask({ task }));
      alert('Thanks!');
    } else {
      alert('Please fill out all fields.');
    }
  }
}
