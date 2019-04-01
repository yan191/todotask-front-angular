import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
