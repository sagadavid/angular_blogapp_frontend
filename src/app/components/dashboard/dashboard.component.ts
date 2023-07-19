import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postService: PostService,
    private auth: AuthService,
    private router: Router
  ) {}

  getAuthorsPosts() {
    this.postService.getPostsByAuthor().subscribe({
      next: (result: any) => {
        this.posts = result['data'];
        console.log(this.posts);
      },
    });
  }
  ngOnInit(): void {
    // this.getPosts();
    this.getAuthorsPosts();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
