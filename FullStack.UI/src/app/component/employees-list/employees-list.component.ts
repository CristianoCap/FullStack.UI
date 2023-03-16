import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {id: '001', name: 'Cristiano Capanna', email: 'cristiano.capanna@gmail.com', phone: 111111111, salary: 2000, department: 'IT'},
    {id: '002', name: 'Cristiana Silvestri', email: 'cristiana.silvestri@libero.com', phone: 222222222, salary: 2200, department: 'HR'},
    {id: '003', name: 'Antonio Campana', email: 'anotnio.campana@hotmail.com', phone: 333333333, salary: 1900, department: 'BSN'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
