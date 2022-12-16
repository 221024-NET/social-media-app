import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private subject = new Subject<any>();
  private savedUser = new User(0, '', '');

  constructor() { }

  setData(user: User) {
    this.savedUser = user;
    console.log('setData for ' + user.user_id);
    this.subject.next(this.savedUser);
  }

  getData(): Observable<User> {
    console.log("getData called");
    return this.subject.asObservable();
  }

  findUser(): User {
    return this.savedUser;
  }
}
