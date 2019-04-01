import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCrudComponent } from './tasks/task-crud/task-crud.component';
import { TaskListResolver } from './tasks/task-list/task-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TaskCrudComponent,
    resolve: {
      tasks: TaskListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
