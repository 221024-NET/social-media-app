import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  user = "kat";
  user_selfie = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
  message = "symmetrical symmetry";
  date = "Nov 1, 2021";
}
