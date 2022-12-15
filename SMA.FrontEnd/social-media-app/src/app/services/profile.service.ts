import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "https://localhost:7143/api/";

  constructor(private http: HttpClient) { }

  public updateUser(id: number, userData: Object) {
    let endpoint = "Users/" + id;
    return this.http.put(this.url + endpoint, userData);
  }
}
