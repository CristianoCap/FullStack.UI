import { Component, OnInit } from '@angular/core';
import { ToDo, toDoListStatic } from 'src/app/model/to-do.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.toDoList = toDoListStatic;
  }

}
