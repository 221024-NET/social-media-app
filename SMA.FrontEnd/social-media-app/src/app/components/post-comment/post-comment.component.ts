import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { CommentClass } from '../../classes/comment-class';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent {
  user = new User(0, "", "");
  
  model = new CommentClass(0, "", 0, 0);
  
 
  @Input() post_id: number = 0;

  

  constructor(private commental: CommentService, private use: DataTransferService) {
    this.user = use.findUser();
  }


  postAComment(form: NgForm) {
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

  postAReply(form: NgForm) {
    this.model.comment = form.value.comment;
    console.log(this.post_id);
  }
  /*
  postAComment(comment: CommentClass) {
    //this.commental.makePost(comment);
    console.log("Comment posted");
    */
  }

