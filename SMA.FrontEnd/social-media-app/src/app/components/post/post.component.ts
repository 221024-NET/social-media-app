import { Component } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public user = "ABCs User";
  public message = "this message";
  public image_url = "";
  public likecount = 777;

  //constructor() { }
}
