import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { Observable } from 'rxjs';

import { VideoService } from '../video.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos$: Observable<Video[]>;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videos$ = this.videoService.allVideos();
  }

}
