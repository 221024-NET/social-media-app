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

  user = new User(0, '', '');
  selected: CompiledPost = new CompiledPost(this.user, new PostClass(-1, 0, "", new Date(), ""));

  postset: any;

  //pid:number, uid:number, m:string, d:Date, img:string
  postContent: any;
  postUrl: any = null;

  constructor(private postal: PostService, dt: DataTransferService) {
    this.user = dt.findUser();//new User(7, 'Testing', 'Purposes');//dt.findUser(); ///////////////REMOVE BEFORE FINAL
  }

  ngOnInit(): void {
    this.postset = this.getAllPosts();
    // this.newpost = new FormGroup({
    //   themessage: new FormControl(""),
    // });
  }

  loadpost(post: CompiledPost) {
    this.selected = post;
  }

  getAllPosts() {
    this.postal.getAllPosts().subscribe(
      (response) => { this.postset = response; },
      (error) => { console.log(error); }
    )
  }

  onImgLoad(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = e => {

        let base64String = reader.result?.toString();
        let base64Index;
        if (base64String) {
          base64Index = base64String.indexOf(',') + 1;
        }
        else { base64Index = 0; }

        this.postUrl = reader.result?.slice(base64Index);
      }
    }
    else {
      this.postUrl = null;
    }

  }


  createPost() {

    const timeNow = new Date();
    const postForm = new FormData();
    postForm.append('user_id', this.user.user_id.toString());
    postForm.append('content', this.postContent);
    postForm.append('date', timeNow.toDateString());

    if (this.postUrl) {
      postForm.append('image', this.postUrl);
    }

    console.log(postForm);

    this.postal.makePost(postForm).subscribe();
  }

}