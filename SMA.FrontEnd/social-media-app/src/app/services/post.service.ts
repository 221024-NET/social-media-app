import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = "";
  constructor(private http: HttpClient) { 

  }
  public addPost(postData: Object) {
    let endpoints = "/posts";
    return this.http.post(this.url + endpoints, postData);
  }

  addPost() {
    this.crudService.addPost({"userID": 1, "id": 999, "title": "Ajay", "body": "test by ajay"}).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }
}
