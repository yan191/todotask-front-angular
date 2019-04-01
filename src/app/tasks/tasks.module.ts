import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskBarComponent } from './new-task-bar/new-task-bar.component';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  declarations: [
    NewTaskBarComponent,
    TaskCrudComponent
  ],
  imports: [
    CommonModule,
    TaskListModule
  ]
})
export class TasksModule { }
