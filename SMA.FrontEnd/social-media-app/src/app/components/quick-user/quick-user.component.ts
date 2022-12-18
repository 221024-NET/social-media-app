import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-quick-user',
  templateUrl: './quick-user.component.html',
  styleUrls: ['./quick-user.component.css']
})
export class QuickUserComponent {
_person: User = new User(0,"friend","");

constructor(private router: Router) { }

@Input()
public set person(p:User)
{
  this._person=p;
}

goToProfile() {
  
}
}
