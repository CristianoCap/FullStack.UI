import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo} from 'src/app/model/to-do.model';
import { HttpService, WorldHello } from 'src/app/services/http.service';
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
    private toDoService: ToDoService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getToDosListFromHttpService()
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

  getToDosListFromHttpService() {
    // console.log(this.httpService.executeHelloWorldBeanService().subscribe());
    this.httpService.getToDoList().subscribe(
      (response: ToDo[]) => {
        this.toDoList = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
