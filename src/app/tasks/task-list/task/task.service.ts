import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

import { Task } from './task';

const API = 'http://localhost:8080/todotask'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http: HttpClient) { }
  
  getAllTask(){
    return this.http
    .get<Task[]>(API+'/task');
  }
  
  deleteTask(id: number): void{
    this.http.delete(API +'/task/'+ id, {responseType: 'text'})
    .subscribe((data) => { 
        console.log(data);
      }
    );
  }

  newTask(titulo: string): void{
    this.http.post(API +'/task', {titulo: titulo, status: false} , {responseType: 'text'} )
      .subscribe((data) => { 
          console.log(data);
        }
      );
  }

  updateTask(id: number, titulo: string, status: boolean): void{
    this.http.put(API +'/task/'+ id,{id: id, titulo: titulo, status: status}, {responseType: 'text'})
    .subscribe((data) => { 
        console.log(data);
      }
    );
  }
}
