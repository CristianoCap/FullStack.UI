import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    stayRegister: new FormControl(false)
  });
  invalidLogin = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.get('username').value === 'criacap' && this.userForm.get('password').value === 'test') {

      // REDIRECT TO WELCOME PAGE
      this.router.navigate(['toDoList', this.userForm.get('username').value]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;

    }
  }

}
