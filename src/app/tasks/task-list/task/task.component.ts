import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from './task.service';

@Component({
  selector: 'tt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() id: number;
  @Input() titulo: string;
  @Input() status: boolean;
  private modoEdit: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(){
    this.taskService.deleteTask(this.id);
  }

  toggleModo(){
    if(this.modoEdit){
      this.modoEdit = false;
    }else{
      this.modoEdit = true;
    }
  }

  saveTask(){
    this.toggleModo();
    this.taskService.updateTask(this.id, this.titulo, this.status);
  }

  checkTask(param: boolean){
    this.status = param;

    this.taskService.updateTask(this.id, this.titulo, this.status);
  }

}
