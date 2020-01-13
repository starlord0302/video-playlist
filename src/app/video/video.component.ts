import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { Observable } from 'rxjs';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos$: Observable<Video[]>;
  displayedColumns: string[] = ['id', 'title', 'length', 'description'];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videos$ = this.videoService.allVideos();
  }

}
