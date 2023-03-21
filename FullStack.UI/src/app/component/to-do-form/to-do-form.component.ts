import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from 'src/app/model/to-do.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
  toDoReceivedInForm: ToDo;

  toDoToEdit = new FormGroup ({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    date: new FormControl(new Date()),
    importance: new FormControl('')
  });

  constructor(
    private toDoService: ToDoService
  ) { }

  ngOnInit(): void {
    this.toDoReceivedInForm = this.toDoService.get();
    // console.log(this.toDoToEdit);
  }

  onSubmit() {
    const toDoListStatic : ToDo = {
      name: this.toDoToEdit.get('name').value,
      description: this.toDoToEdit.get('name').value,
      date: this.toDoToEdit.get('date').value,
      done: false,
      importance: this.toDoToEdit.get('importance').value
    }

    console.log(toDoListStatic);
  }

}
