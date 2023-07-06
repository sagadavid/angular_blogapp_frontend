import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //define form-group and validators
import { LoginService } from 'src/app/services/login.service'; //will communicate with api
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  date = new Date();

  loginForm: FormGroup; //represents group of controls
  submitted = false; //flag-submit status
  loading = false; //flag
  user: User = new User('', '');
  error: string = '';

  constructor(
    private formBuilder: FormBuilder, //form
    private loginService: LoginService //action
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  //getter.. allows to reference-get the ability of form controls
  get controlDetails() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.user = new User(
      this.controlDetails['username'].value,
      this.controlDetails['password'].value
    );
    console.log(this.user);
  }
}
