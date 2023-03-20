import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { ToDoFormComponent } from './component/to-do-form/to-do-form.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'toDoList/:username', component: ToDoListComponent },
  { path: 'toDoForm', component: ToDoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
