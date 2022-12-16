import { Component } from '@angular/core';
import { CommentClass } from 'src/app/classes/comment-class';
import { CompiledComment } from 'src/app/classes/compiled-comment';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  // cid:number,c:string,uid:number,pid:number,parcid:number
  com: CompiledComment = new CompiledComment(new User(0,"",""), new CommentClass(0,"this is a comment",0,0,0));



}
