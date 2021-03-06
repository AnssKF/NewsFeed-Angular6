import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Interfaces/news-feed';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  expanded:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onExpand(){
    this.expanded = ! this.expanded;
  }

}
