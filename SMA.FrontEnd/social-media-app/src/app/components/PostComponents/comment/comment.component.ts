import { Component } from '@angular/core';
import { CommentClass } from 'src/app/classes/comment-class';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private user_selfie: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
  com: CommentClass = new CommentClass(1, "uusseerrnnaammee", this.user_selfie, "Nov 1, 2021", "symmetrical symmetry");
}
