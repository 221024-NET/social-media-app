import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  numberOfLikes = 0;
  likeClicked = false;

  constructor() {}

  incrementLike() {
    this.numberOfLikes++;
    this.likeClicked = true;
    
    
  }

  decrementLike() {
    this.numberOfLikes--;
    this.likeClicked = false;
    
  }
}
