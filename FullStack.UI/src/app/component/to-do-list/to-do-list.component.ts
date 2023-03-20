import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo, toDoListStatic } from 'src/app/model/to-do.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];
  username = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.toDoList = toDoListStatic;
    console.log(toDoListStatic[0].date);
    this.username = this.route.snapshot.params['username'];
  }

}
