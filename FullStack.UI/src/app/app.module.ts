import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './component/error/error.component';
import { MenuComponent } from './component/shared/menu/menu.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoDoneComponent } from './component/to-do-done/to-do-done.component';
import { ToDoFormComponent } from './component/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ToDoDoneComponent,
    ToDoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
