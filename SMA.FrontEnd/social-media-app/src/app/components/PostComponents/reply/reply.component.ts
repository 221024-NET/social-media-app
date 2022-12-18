import { Component, Input } from '@angular/core';
import { CompiledComment } from 'src/app/classes/compiled-comment';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent {
  public _replies: any;
  
  @Input()
  public set replies(r:CompiledComment[])
  {
    this._replies=r;
  }
}
