import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentClass } from '../classes/comment-class';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public url = 'https://localhost:7143/api/Comments';
  constructor(private http: HttpClient) { }

  public makePost(postData: CommentClass) {
    return this.http.post(this.url, postData);
  }

  public getAllComments() {
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
