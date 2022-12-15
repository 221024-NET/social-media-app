import { Component, Input } from '@angular/core';
//import { CommentComponent } from './components/comment/comment.component'; // already imported globally
import { PostClass } from 'src/app/classes/post-class';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public post: PostClass = new PostClass(0,"name","path","today","Hello, World!","",88);

  constructor(private postalservice: PostService) { }

  ngOnInit() { }

  //@Input()
  public set ID(id:number) {
    this.post.postid = id;
  }
}
