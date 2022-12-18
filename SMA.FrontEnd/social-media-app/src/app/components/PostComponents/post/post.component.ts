import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
//import { CommentComponent } from './components/comment/comment.component'; // already imported globally
import { PostClass } from 'src/app/classes/post-class';
import { PostService } from 'src/app/services/post.service';
import { CompiledPost } from 'src/app/classes/compiled-post';
import { User } from 'src/app/classes/user';
import { CommentService } from 'src/app/services/comment.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { CommentClass } from '../../../classes/comment-class';
import { CompiledComment } from '../../../classes/compiled-comment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnChanges,OnInit {
  user = new User(0, "You!", "");
  public _selected: CompiledPost = new CompiledPost(this.user, new PostClass(0, 0, "Click something", new Date(), ""));
  pd: Date = new Date();
  postImg: any;
  @Input() toplevelcomments: any;
  //toplevelcomments: any;

  constructor(private commental: CommentService, user: DataTransferService) {
    //this.user = user.getData();
  }
    ngOnInit(): void {
      console.log("ngOnInit called in post-component")
      this.getTopComments();
      /*
      this._selected = this._selected;
      this.pd = this._selected.post.date;
      this.postImg = 'data:image/*;base64,' + this._selected.post.image;
      this.getTopComments(); */
    }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes made in post.component.ts");
    this.getTopComments();
    this.ngOnInit();
    }

  @Output() reloadPostEvent = new EventEmitter<string>();

  @Input()
  public set selected(selected: CompiledPost) {
    //console.log(selected);
    this._selected = selected;
    this.pd = selected.post.date;

    this.postImg = 'data:image/*;base64,' + selected.post.image;

    this.getTopComments();
  }

  getTopComments() {
    this.commental.getTopCommentsByPost(this._selected.post.post_id).subscribe(
      (response) => { /*console.log("getAllComments called");*/ this.toplevelcomments = response; },
      (error) => { /*console.log("getAllPosts called");*/ console.log(error); }
    )
  }

  addComment(comment: string) {
    console.log(comment);
    this.commental.getTopCommentsByPost(this._selected.post.post_id).subscribe(
      (response) => { /*console.log("getAllComments called");*/ this.toplevelcomments = response; },
      (error) => { /*console.log("getAllPosts called");*/ console.log(error); }
    )
    this.reloadPostEvent.emit("reload post");
    
  }
}
