import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getToDoList() {
    return this.http.get<ToDo[]>("http://localhost:8080/toDoList")
  }
}


export interface WorldHello {
  id: number;
  name: string;
  author: string;
}
