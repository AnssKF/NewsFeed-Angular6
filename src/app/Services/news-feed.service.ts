import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/news-feed';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private posts: Post[] = [];
  private postsChange: Subject<Post[]> = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  fetch_posts() {
    if (this.posts.length > 0) {
      setTimeout(() => {
        this.postsChange.next(this.posts);
      });
    } else {
      this.http.get<Post[]>('./assets/data.json').subscribe(
        res => {
          this.posts = res;
          this.postsChange.next(this.posts);
        },
        err => {
          console.log("errrrororororor");
        }
      );
    }
    return this.postsChange;
  }
}
