import { Component, OnInit } from "@angular/core";
import { Video } from "./video";
import { Observable } from "rxjs";

import { DataSource } from "@angular/cdk/collections";
import { VideoService } from "../api/video.service";
import { PlaylistService } from "../api/playlist.service";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
  videos$: Observable<Video[]>;
  selectedVideo: Video;

  constructor(
    private videoService: VideoService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.getVideos();
  }

  selectVideo(video) {
    this.selectedVideo = video;
  }

  addToPlaylist() {
    this.playlistService.addVideo(this.selectedVideo);
  }

  getVideos() {
    this.videos$ = this.videoService.allVideos();
  }
}
