import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private user: User = new User(0, "", "");
  private subject = new Subject<any>();

  constructor() { }

  setData(user: User) {
    console.log('setData for ' + user.user_id);
    this.subject.next({ User: user });
  }


  getData(): Observable<User> {
    console.log("getData called");
    return this.subject.asObservable();
  }
  /*
  
  
      this.user.user_id = user.user_id;
      this.user.username = user.username;
      this.user.password = user.password;
      this.user.first_name = user.first_name;
      this.user.last_name = user.last_name;
      this.user.phone_number = user.phone_number;
  
    getData() {
      console.log(this.user);
      return this.user;
    }*/
}
