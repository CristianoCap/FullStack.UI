import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo, toDoListStatic } from 'src/app/model/to-do.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  // LOCAL Variable
  toDoList: ToDo[] = [];
  username = '';

  // TRUE VARIABLES
  enableEdit = false;


  constructor(
    private route: ActivatedRoute,
    private toDoService: ToDoService
  ) { }

  ngOnInit(): void {
    for( let toDo of toDoListStatic) {
      if (!toDo.done) {
        this.toDoList.push(toDo)
      }
    }
    // console.log(this.toDoList)
    // console.log(toDoListStatic[0].date);
    this.username = this.route.snapshot.params['username'];
  }

  showToDoForm(toDoToEdit: ToDo, index) {
    this.toDoService.set(toDoToEdit);
    this.toDoService.setToDoIndex(index);
    // console.log(toDoToEdit)
    this.enableEdit = true;
  }

  closeToDoForm($event: any) {
    console.log('**ToDoListComponent -> enableForm -> $event')
    console.log($event);
    console.log('**ToDoListComponent -> enableForm -> this.toDoService.get()')
    console.log(this.toDoService.get())
    this.changeToDoEdited();
    this.enableEdit = $event;
  }

  changeToDoEdited(){
    // console.log('**to-do-list.component.ts -> changeToDoEdited() -> B - let index = this.toDoService.getToDoIndex()')
    let index = this.toDoService.getToDoIndex()
    // console.log('index: ' + index);
    this.toDoList[index] = this.toDoService.get();
    // console.log('this.toDoList[index]: ');
    // console.log(this.toDoList[index]);
  }
}

