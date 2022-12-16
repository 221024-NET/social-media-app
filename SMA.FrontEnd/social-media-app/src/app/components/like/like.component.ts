import { Component, Input } from '@angular/core';
import { Like } from 'src/app/classes/like';
import { PostService } from 'src/app/services/post.service';
import { PostSummaryComponent } from '../PostComponents/post-summary/post-summary.component';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  numberOfLikes = 0;
  likeClicked = false;
  like = new Like(0, 0, 0);

  @Input()
  public parentPost(parentPost: PostSummaryComponent) {
    this.like.post_id = parentPost._selected.post.post_id;
  }

  constructor(private postService: PostService) {}

  getParentLikes() {
    
  }

  incrementLike() {
    this.numberOfLikes++;
    this.likeClicked = true;
  }

  decrementLike() {
    this.numberOfLikes--;
    this.likeClicked = false;
  }
}
