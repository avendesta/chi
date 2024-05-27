import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:8080/api/post';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${postId}`);
  }
}
