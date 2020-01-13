import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { VideoComponent } from './video/video.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoFormComponent } from './video/video-form/video-form.component';

const appRoutes: Routes = [
  { path: 'videos', component: VideoComponent },
  { path: 'add-video', component: VideoFormComponent },
  { path: '',   redirectTo: '/videos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
