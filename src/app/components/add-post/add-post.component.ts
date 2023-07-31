import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPostService } from 'src/app/services/add-post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  post: Post = new Post('', '');
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private addPostService: AddPostService
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  get formControls() {
    return this.postForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted set to true');
    if (this.postForm.invalid) {
      console.log('postForm is invalid');
      return;
    }

    this.post = new Post(
      this.formControls['title'].value,
      this.formControls['text'].value
    );

    this.addPostService.addPost(this.post).subscribe({
      next: (result: any) => {
        if (result['status'] === 'success') {
          this.closeBtn.nativeElement.click();
        } else {
          console.log('Error adding post');
        }
      },
      error: (e: any) => {},
      complete: () => {
        console.info('complete');
      },
    });
  }
}
