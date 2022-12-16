import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  numberOfLikes = 0;
  likeClicked = false;
  dislikeClicked = false;

  constructor() {}

  incrementLike() {
    this.numberOfLikes++;
    this.likeClicked = true;
    this.dislikeClicked = false;
    
  }

  decrementLike() {
    this.numberOfLikes--;
    this.dislikeClicked = true;
    this.likeClicked = false;
    
  }
}
