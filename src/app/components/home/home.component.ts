import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

//call the authentication method of the AuthService, and redirect to the login page.
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  //login is established via (click)="this.router.navigate([''])".. so dont need extra function

  ngOnInit(): void {}
}
