import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
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


  checkUser(user: User): Observable<boolean> {
    return this.http.post(this.url + "/checkuser", user).pipe(map(res => {if(res) return true; else return false}));
  }
  

  makeUser(user: User) {
    this.http.post(this.url, user).subscribe(); // data => console.log(data)); // return the user if you want to login right away
  }

}
