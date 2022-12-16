import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map, Observable } from 'rxjs';
import { PostClass } from 'src/app/classes/post-class';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = "";
  constructor(private http: HttpClient) { 

  }
  public makePost(postData: PostClass) {
    let endpoint = "/posts";
    return this.http.post(this.url + endpoint, postData);
  }

  public getAllPosts() {
    let endpoint = "/posts"
    return this.http.get(this.url + endpoint);
  }

  public getPostByID(id: number) {
    let endpoint = "/posts/"
    return this.http.get(this.url + endpoint + id);
  }

  public deletePostByID(id: number) {
    let endpoint = "/posts/"
    return this.http.delete(this.url + endpoint + id);
  }

  public getNumberOfLikes(id: number) {
    let endpoint = "/Posts/getNumberOfLikes/" + id;
    return this.http.get(this.url + endpoint + id);
  }
}
