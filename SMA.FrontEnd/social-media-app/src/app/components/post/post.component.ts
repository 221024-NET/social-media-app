import { Component } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  user = "ABCs User";
  date = "Oct 24, 2022";
  message = "this message";
  image_url = "";
  likecount = 777;

  //constructor() { }
}
