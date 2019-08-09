import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
//import { HttpService } from '../post.service';
import { HttpClient } from '@angular/common/http';
import { map, tap, find } from 'rxjs/operators';



@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss'],
})
export class DetailPostComponent implements OnInit {
  post$: Observable<any>;
  user$: Observable<any>;
  comments$: Observable<any[]>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    const {id = null} = this._route.snapshot.params;
    if (!id) { this._router.navigateByUrl('blog'); }
    this.post$ = this._http.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(
      tap(p => {
        this.user$ = this._http.get('https://jsonplaceholder.typicode.com/users/' + p.userId);
      })
    );
    this.comments$ = this._http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id).pipe(map((res: any[]) => res));
  }
}

