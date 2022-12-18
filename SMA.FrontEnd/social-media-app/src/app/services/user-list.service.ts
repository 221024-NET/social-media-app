import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private url: string = 'https://localhost:7143/api/Users';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  getAllUsers() {
    return this.http.get(this.url + "/");
  }

  // not implemented
  getFriends(user: User) {
    const endpoint = "/friendsof/"
    this.http.get(this.url + endpoint + user.user_id);
  }
}
