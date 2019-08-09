import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {

  public formPost;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    this.formPost = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: new FormControl(''),
    });
  }

  submit() {

    this.http.post('https://jsonplaceholder.typicode.com/posts', (req, res) => {
      res.json({
          data: req.body
      })
      .then(json => console.log(json));
  }
  )
};
}
