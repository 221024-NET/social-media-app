import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  numberOfLikes = 0;

  constructor() {}

  incrementLike() {
    this.numberOfLikes++;
  }

  decrementLike() {
    this.numberOfLikes--;
  }
}
