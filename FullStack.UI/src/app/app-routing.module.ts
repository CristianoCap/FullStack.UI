import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ToDoDoneComponent } from './component/to-do-done/to-do-done.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [RouteGuardService]},
  { path: 'toDoList', component: ToDoListComponent, canActivate: [RouteGuardService] },
  { path: 'toDoList/:username', component: ToDoListComponent, canActivate: [RouteGuardService] },
  { path: 'toDoDone', component: ToDoDoneComponent, canActivate: [RouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
