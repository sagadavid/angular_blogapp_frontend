import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any = {};
  @Input() read = true;
  @Input() admin = false;

  constructor(private commonService: CommonService) {}
  ngOnInit(): void {}

  setPostToEdit(post: any) {
    this.commonService.setPostToEdit(post);
  }
}
