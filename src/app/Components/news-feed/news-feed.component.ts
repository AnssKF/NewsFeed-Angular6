import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/Services/news-feed.service';
import { Post } from 'src/app/Interfaces/news-feed';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  private postsList: Post[] = [];

  constructor(private newsfeedService: NewsFeedService) { }

  ngOnInit() {
    this.newsfeedService.fetch_posts().subscribe(
      res => {
        this.postsList = res;
      }
    );
  }

}
