import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

//call the authentication method of the AuthService, and redirect to the login page.
export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private postService: PostService
  ) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  //login is established via (click)="this.router.navigate([''])".. so dont need extra function

  getPosts() {
    this.postService.getAllPosts().subscribe({
      next: (result: any) => {
        this.posts = result['data'];
        console.log(this.posts);
      },
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
