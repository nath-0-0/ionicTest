import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Post, IPost} from './models/post';
import {map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {


  private posts: BehaviorSubject<Post[]>;
  private posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.posts = new BehaviorSubject([]);
    this.posts$ = this.posts.asObservable();
    this.fetch();
  }

  public fetch(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(
        map((posts: IPost[]) => {
          return posts.map((post: IPost) => new Post(post));
        }),
        tap((posts: Post[]) => console.log(`Here we got ${posts.length} posts!`))
      )
      .subscribe((posts: Post[]) => this.posts.next(posts));
  }
// public getPosts(): Observable<Post[]> {
//     this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
//   }

   public getPosts(): Observable<Post[]> {
     return this.posts$;
   }

}
