import { Component } from '@angular/core';
import { PostClass } from 'src/app/classes/post-class';
import { User } from 'src/app/classes/user';
import { CompiledPost } from 'src/app/classes/compiled-post';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { PostService } from 'src/app/services/post.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css', '../../app.component.css']
})

export class FeedPageComponent {
  user = new User(1, "namename", "passpass","firstfirst","lastlast",1234567890);
  selected?: CompiledPost;
  postset: any;
  newpost: any;

  constructor(private postal:PostService, user:DataTransferService) {
    //this.user = user.getData();
  }

  ngOnInit(): void {
    this.newpost = new FormGroup({
      themessage: new FormControl(""),
    });
  }

  getAllPosts() {
    this.postal.getAllPosts().subscribe(
      (response) => { this.postset = response; console.log(this.postset) },
      (error) => { console.log(error); }
    )
  } 

  // writePost(message: string) {
  //   const today = new Date();
  //   const fresh = new PostClass(0,1,this.newpost,today,"");
  //   this.postal.makePost(fresh).subscribe(
  //     (response) => {console.log(response); },
  //     (error) => {console.log(error); }
  //   )
  // }

  // getAllFriendsPosts() {
  //   this.postal.
  // }
}
