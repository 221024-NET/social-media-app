import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostClass } from 'src/app/classes/post-class';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = 'https://localhost:7143/api/Posts';
  constructor(private http: HttpClient) { }

  public makePost(postData: FormData) {
    return this.http.post(this.url, postData);
  }

  public getAllPosts() {
    return this.http.get(this.url);
  }

  public getPostByID(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  public deletePostByID(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

  public getNumberOfLikes(id: number) {
    let endpoint = "/Posts/getNumberOfLikes/" + id;
    return this.http.get(this.url + endpoint + id);
  }
}
