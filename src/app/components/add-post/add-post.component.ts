import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
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
  }
}
