import { Component, Input } from '@angular/core';
import { CompiledPost } from 'src/app/classes/compiled-post';
import { PostClass } from 'src/app/classes/post-class';
import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})

export class PostSummaryComponent {
  public _selected: CompiledPost = new CompiledPost(new User(0, "0u", ""), new PostClass(0, 0, "0msg", new Date(), ""));
  postImg: any;

  @Input()
  public set selected(selected: CompiledPost) {
    this._selected = selected;
    this.postImg = 'data:image/*;base64,' + selected.post.image;
    //console.log(selected);
  }
}
