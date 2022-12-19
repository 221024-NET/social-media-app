import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { CommentClass } from '../../classes/comment-class';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {
  user = new User(0, "", "");

  model = new CommentClass(0, "", 0, 0,0);

  @Input() post_id: number = 0;
  @Input() comment_id: number = 0;
  @Output() addReplyEvent = new EventEmitter<string>();
  formdata:any;

  constructor(private commental: CommentService, private use: DataTransferService) {
    this.user = use.findUser();
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      comment: new FormControl("")
    });
  }

  postAReply(form: any) {
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    }
    else {
      this.model.comment = form.value.comment;
      console.log( "comment: "+this.model.comment);
      this.model.post_id = this.post_id;
      console.log("post id: "+this.model.post_id);
      this.model.user_id = this.user.user_id
      console.log("user id: "+this.model.user_id);
      this.model.parent_comment_id = this.comment_id;
      console.log("parent comment id: "+this.model.parent_comment_id);
      this.commental.makePost(this.model).subscribe(
        (response) => { this.addReplyEvent.emit("making a reply") },
        (error) => { console.log(error); }
      );  
    }
  } 
}
