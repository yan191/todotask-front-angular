import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';


import { Task } from './task/task';
import { TaskService } from './task/task.service';


@Injectable({ providedIn: 'root'})
export class TaskListResolver implements Resolve<Observable<Task[]>>{

    constructor(private service: TaskService) {}

    resolve(): Observable<Task[]> {
        return this.service.getAllTask();
    }
}