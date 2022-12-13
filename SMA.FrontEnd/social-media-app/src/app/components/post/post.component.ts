import { Component } from '@angular/core';
//import { CommentComponent } from './components/comment/comment.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  user = "ABCs User";
  user_selfie = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
  date = "Oct 24, 2022";
  message = "this message";
  image_url = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
  likecount = 777;
  //comments = [new CommentComponent(), new CommentComponent];

  //constructor() { }
}
