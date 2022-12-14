import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BaseUser } from '../interfaces/base-user';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: string = 'https://localhost:7143/api/Users';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // get username from register page
  //  - check if user exists in database
  //    - if so, reenter prompt -----------^ repeat
  //    - if not, get a password
  //      - reenter password
  //        - if not matched, ^ repeat
  //        - if matched, create user (POST)


  checkUser(user: BaseUser): Observable<BaseUser[]> {
    //const checkedUser: any = this.http.get<User>(this.url + "/1");//`?username=${user.username}`)
                                                //.subscribe((newUser: BaseUser) => user = {});
                              
    
    //.pipe(map((user: User) => new User(user)));

    //console.log(checkedUser.username);
    //return checkedUser;

    return this.http.get<BaseUser[]>(this.url).pipe(map(trueUser => trueUser.filter((theUser: BaseUser) => theUser.username === user.username)));
  }

  makeUser(user: BaseUser) {
    this.http.post<BaseUser>(this.url, user);
  }

}
