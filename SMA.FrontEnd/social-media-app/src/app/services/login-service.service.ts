import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from "../classes/user";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = "https://localhost:7143/api/";

  constructor(private http: HttpClient) { 
  
  }

  public login(user: Object) {
    let endpoint = "Users/login";
    return this.http.post(this.url + endpoint, user);
  }

  public getAccountById(id: number) {
    let endpoint = "Users/" + id;
    return this.http.get(this.url + endpoint);
  }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.url)
  //   .pipe(map((users: User[]) => users.map(user => new User(user.user_id, user.username, user.password))));
  // }

}