import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post} from '../models/post';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  {
  public posts$: Observable<Post[]>;


  constructor(private posts: PostService) {
    this.posts$ = posts.getPosts();
  }


}
