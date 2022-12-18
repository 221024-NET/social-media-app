import { Component, Input, OnInit } from '@angular/core';
import { Like } from 'src/app/classes/like';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LikeService } from 'src/app/services/like.service';
import { PostService } from 'src/app/services/post.service';
import { PostSummaryComponent } from '../PostComponents/post-summary/post-summary.component';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberOfLikes: number = 0;
  likeClicked = false;
  like = new Like(0, 0, 0);
  loggedInUserID = 0;
  
  @Input() parentPostID: number = 0; 
  
  constructor(private postService: PostService, private dataTransfer: DataTransferService, private likeService: LikeService) {
    this.loggedInUserID = dataTransfer.findUser().user_id;
    
  }

  ngOnInit(): void {
    this.getParentLikes();
    this.checkIfLiked();
  }

  getParentLikes() {
    this.postService.getNumberOfLikes(this.parentPostID).subscribe(
      (response) => {
        this.numberOfLikes = response; 
      },
      (error) => {
        console.log(error);
      }
    )
  }

  incrementLike() {
    this.like.post_id = this.parentPostID;
    this.like.user_id = this.loggedInUserID;
    this.numberOfLikes++;
    this.likeClicked = true;
    this.likeService.makeLike(this.like).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  decrementLike() {
    this.numberOfLikes--;
    this.likeClicked = false;
    this.likeService.unLike(this.parentPostID, this.loggedInUserID).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  checkIfLiked() {
    this.postService.doesUserLikePost(this.parentPostID, this.loggedInUserID).subscribe(
      (response) => {
        this.likeClicked = response;
        //console.log(response);
      },
      (error) => console.log(error)
    )
  }
}
