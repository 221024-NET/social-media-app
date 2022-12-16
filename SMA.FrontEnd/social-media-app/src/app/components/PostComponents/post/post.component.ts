import { Component, Input } from '@angular/core';
//import { CommentComponent } from './components/comment/comment.component'; // already imported globally
import { PostClass } from 'src/app/classes/post-class';
import { PostService } from 'src/app/services/post.service';
import { CompiledPost } from 'src/app/classes/compiled-post';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public _selected: CompiledPost = new CompiledPost(new User(0,"0u",""), new PostClass(0,0,"0msg",new Date(),""));
  pd: Date = new Date();
  toplevelcomments: any;

  ngOnInit(): void {
    //this.toplevelcomments = this.getAllXsComments();
  }

  @Input()
  public set selected(selected: CompiledPost) {
    console.log(selected);
    this._selected = selected;
    this.pd = selected.post.date;
    //selected.post.date. - this.timenow;
  }
}
