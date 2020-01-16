import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import { VideoService } from './api/video.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitleTakenDialog, VideoFormComponent } from './video/video-form/video-form.component';
import { VideoTableComponent } from './video/video-table/video-table.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './api/playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PageNotFoundComponent,
    VideoFormComponent,
    VideoTableComponent,
    TitleTakenDialog,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    AppRoutingModule
  ],
  entryComponents: [TitleTakenDialog],
  providers: [VideoService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
