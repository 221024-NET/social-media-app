import { Component, Input } from '@angular/core';
import { CommentClass } from 'src/app/classes/comment-class';
import { CompiledComment } from 'src/app/classes/compiled-comment';
import { User } from 'src/app/classes/user';
import { CommentService } from 'src/app/services/comment.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  _com: CompiledComment = new CompiledComment(new User(0,"uu",""), new CommentClass(0,"this is a comment",0,0,0));
  replies: any;
  
  constructor(private replial: CommentService, user: DataTransferService) {
    //this.user = user.getData();
  }

  @Input()
  public set com(com: CompiledComment) {
    //console.log(com);
    this._com = com;
    this.getReplies()
  }

  getReplies() {
    this.replial.getRepliesByComment(this._com.comment.comment_id).subscribe(
      (response) => { console.log("getReplies called"); this.replies = response; console.log(response)},
      (error) => { /*console.log("getAllPosts called");*/ console.log(error); }
    )
  }
}
