import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css', '../../app.component.css']
})
export class FeedPageComponent {
  user = new User(0, "namename", "passpass","firstfirst");

  //constructor(u:User) {
  //  this.user = u;
  //}
}
