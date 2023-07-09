import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //define form-group and validators
import { AuthService } from 'src/app/services/auth.service'; //will communicate with api
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

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
    private authService: AuthService, //action
    private router: Router //help to route other endpoints after login
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
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

    this.authService.login(this.user).subscribe({
      next: (result: any) => {
        if (result['status'] === 'success') {
          this.user.setId(result['data'][0]._id);
          //set current user to whom/if has just logged in successfully
          this.authService.setCurrentUser(this.user);
          this.router.navigate(['/home']);
        } else {
          this.error = 'wrong username or password';
        }
      },
      error: (er) => {
        this.error = er;
        this.loading = false;
      },
      complete: () => console.info('complete'),
    });
  }
}
