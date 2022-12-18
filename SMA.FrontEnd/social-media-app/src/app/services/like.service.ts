import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  url = "https://localhost:7143/api/Likes"

  constructor(private http: HttpClient) { }

  public makeLike(likeData: Object) {
    return this.http.post(this.url, likeData);
  }

  public unLike(postID: number, userID: number) {
    let endpoint = "/unLike/"
    return this.http.delete(this.url + endpoint + postID + "/" + userID);
  }
}
