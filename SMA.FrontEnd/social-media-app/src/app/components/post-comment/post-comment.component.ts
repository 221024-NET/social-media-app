import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { CommentClass } from '../../classes/comment-class';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  user = new User(0, "", "");
  
  model = new CommentClass(0, "", 0, 0);
  
 
  @Input() post_id: number = 0;

  formdata: any;

  constructor(private commental: CommentService, private use: DataTransferService) {
    this.user = use.findUser();
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      comment: new FormControl("")
    });
  }


  postAComment(form: any) {
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    }
    else {
      this.model.comment = form.value.comment;
      console.log(this.model.comment);
      this.model.post_id = this.post_id;
      console.log(this.model.post_id);
      this.model.user_id = this.user.user_id
      console.log(this.model.user_id);
      this.commental.makePost(this.model).subscribe(
        (response) => { console.log("making a comment") },
        (error) => { console.log(error); }
      );
    }
  }


  /*
  postAComment(comment: CommentClass) {
    //this.commental.makePost(comment);
    console.log("Comment posted");
    */
  }

