import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

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
  errorFlag = false;
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.get('username').value !== 'criacap' || this.userForm.get('password').value !== 'test') {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
    }
  }

}
