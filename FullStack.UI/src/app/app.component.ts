import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FullStack.UI';

  constructor() {

  }

  ngOnInit() {

  }
}
