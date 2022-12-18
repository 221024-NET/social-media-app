import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { CommentClass } from '../../classes/comment-class';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent {
  user = new User(0, "", "");

  model = new CommentClass(0, "", 0, 0,0);

  @Input() post_id: number = 0;
  @Input() comment_id: number = 0;

  constructor(private commental: CommentService, private use: DataTransferService) {
    this.user = use.findUser();
  }

  postAReply(form: NgForm) {
    this.model.comment = form.value.comment;
    console.log( "comment: "+this.model.comment);
    this.model.post_id = this.post_id;
    console.log("post id: "+this.model.post_id);
    this.model.user_id = this.user.user_id
    console.log("user id: "+this.model.user_id);
    this.model.parent_comment_id = this.comment_id;
    console.log("parent comment id: "+this.model.parent_comment_id);
    this.commental.makePost(this.model).subscribe(
      (response) => { console.log("making a comment") },
      (error) => { console.log(error); }
    );  

  } 
}
