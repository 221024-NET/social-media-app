import { Component } from '@angular/core';
import { PostClass } from 'src/app/classes/post-class';
import { User } from 'src/app/classes/user';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css', '../../app.component.css']
})
export class FeedPageComponent {
  user = new User(0, "namename", "passpass","firstfirst");
  selected?: PostClass;
  postset: any;
  newpostmessage:string="";

  constructor(private postal:PostService, user:DataTransferService) {
    //this.user = user.getData();
  }

  getAllPosts() {
    this.postal.getAllPosts().subscribe(
      (response) => { this.postset = response; console.log(this.postset) },
      (error) => { console.log(error); }
    )
  } 

  writePost(message: string) {
    const fresh = new PostClass(0,1,"Oct","message","");
    this.postal.makePost(fresh).subscribe(
      (error) => {console.log(error); }
    )
  }
}
