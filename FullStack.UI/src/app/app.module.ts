import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { LoginComponent } from './component/login/login.component';
import { ToDoFormComponent } from './component/to-do-form/to-do-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    LoginComponent,
    ToDoFormComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
