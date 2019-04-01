import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-list/task/task.service';

@Component({
  selector: 'tt-new-task-bar',
  templateUrl: './new-task-bar.component.html',
  styleUrls: ['./new-task-bar.component.css']
})
export class NewTaskBarComponent implements OnInit {

  private titulo: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  setTitulo(evento: any){
    this.titulo = evento.target.value;
  }

  newTask(){
    this.taskService.newTask(this.titulo);
  }

}
