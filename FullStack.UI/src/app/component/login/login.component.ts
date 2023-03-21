import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authService.authenticate(this.userForm.get('username').value,this.userForm.get('password').value)) {

      // REDIRECT TO WELCOME PAGE
      this.router.navigate(['toDoList', this.userForm.get('username').value]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;

    }
  }

}
