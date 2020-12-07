import { PostService } from './posts.service';
import { Post } from './post.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData:Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);    
  }

  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }


}
