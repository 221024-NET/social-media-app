import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

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


  checkUser(username: string) {
    return this.http.get(this.url + `?username=${username}`);
  }

  makeUser(user: User) {
    this.http.post(this.url, user);
  }

}
