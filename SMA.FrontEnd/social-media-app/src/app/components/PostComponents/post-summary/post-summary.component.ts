import { Component } from '@angular/core';
import { PostClass } from 'src/app/classes/post-class';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent {
  public post: PostClass = new PostClass(0,0,"name","Hello, World!","");
}
