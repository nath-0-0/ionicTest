import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: '',
    children: [
      {
        path: '',
        component: PostComponent
      },
      {
        path: 'edit',
        component: EditPostComponent
      },
      {
        path: 'photo',
        component: PhotoComponent
      },
      {
        path: ':id',
        component: DetailPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
