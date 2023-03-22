import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Importance, ToDo } from 'src/app/model/to-do.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
  @Output() editEnable = new EventEmitter<boolean>();

  toDoReceivedInForm: ToDo;

  toDoToEdit = new FormGroup ({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
    importance: new FormControl('', Validators.required)
  });

  constructor(
    private toDoService: ToDoService
  ) { }

  ngOnInit(): void {
    this.toDoReceivedInForm = this.toDoService.get();
    // console.log(this.toDoToEdit);
  }

  onSubmit() {
    const toDoListChanged : ToDo = {
      name: this.toDoToEdit.get('name').value,
      description: this.toDoToEdit.get('name').value,
      date: this.toDoToEdit.get('date').value,
      done: false,
      importance: this.toDoToEdit.get('importance').value
    }
    if(this.toDoToEdit.valid) {
      this.toDoService.set(toDoListChanged);
      this.editEnable.emit(false);
    }
  }

  // START STUF DROPDOWN
  dropdownValueChanged($event: any) {
    console.log('**ToDoFormComponent -> dropdownValueChanged -> $event.name')
    // console.log($event.name);
    this.toDoToEdit.controls['importance'].setValue($event.name);
    console.log('**ToDoFormComponent -> dropdownValueChanged -> this.toDoToEdit')
    // console.log(this.toDoToEdit);
  }
  dropdownSetOptions() : any{
    let i : typeof Importance;
    let dropdownOptions: any[] = [
      {name: i.High},
      {name: i.Medium},
      {name: i.Low}
    ];
    return dropdownOptions;
  }
  // END STUF DROPDOWN

}
