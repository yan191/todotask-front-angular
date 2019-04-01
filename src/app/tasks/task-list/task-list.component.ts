import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from './task/task';
import { TaskService } from './task/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tt-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: TaskService
    ) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.data['tasks'];


    var api = this.service;
    var tasks = this;
    
    setInterval(function() {
      var taskObs: Observable<Task[]> = api.getAllTask();
      taskObs.subscribe(
        taskList => {
         tasks.updateTask(taskList);
        },
        error => console.log(error)
      );
      
    }, 1000);

  }

  updateTask(tasks: Task[]): void {
    var hasChanged = false;

    for(var task of tasks){
      var check = this.tasks.filter(taskItem => taskItem.id == task.id ? true : false);
      if(check.length != 1){
        hasChanged = true;
        break;
      }
    }
    if(hasChanged){
      this.tasks = tasks;
    }else{
      if(this.tasks.length != tasks.length){
        this.tasks = tasks;
      }
    }
  }

}
