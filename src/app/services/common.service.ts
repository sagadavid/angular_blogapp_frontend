import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public postAdded_Observable = new Subject();
  //to notify when one has been selected to be edited.
  public postToEdit_Observable = new Subject();
  postToEdit: Post = new Post('', '');

  constructor() {}

  notifyPostAddition(msg: string) {
    this.postAdded_Observable.next(msg);
  }

  notifyPostEdit(msg: string) {
    this.postToEdit_Observable.next(msg);
  }

  setPostToEdit(post: any) {
    this.postToEdit = new Post(post.title, post.text);
    this.postToEdit.setId(post._id);
    this.notifyPostEdit('');
  }
}
