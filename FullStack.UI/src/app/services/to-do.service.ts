import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDo: ToDo;
  toDoIndex: number;
  constructor() { }

  get() : ToDo {
    return this.toDo;
  }
  set(toDo: ToDo){
    this.toDo = toDo;
  }

  getToDoIndex() : number {
    return this.toDoIndex;
  }
  setToDoIndex(index: number) {
    this.toDoIndex = index;
  }
}
