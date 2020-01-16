import {
  Component,
  OnInit,
  KeyValueDiffer,
  KeyValueDiffers,
  DoCheck
} from "@angular/core";
import { PlaylistService } from "../api/playlist.service";
import { Video } from "../video/video";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, DoCheck {
  private videoDiffer: KeyValueDiffer<string, any>;
  public video: Video;
  public videos = new Set();

  constructor(
    private playlistService: PlaylistService,
    private differs: KeyValueDiffers
  ) {
    this.playlistService.playlist$.subscribe(data => {
      this.video = data;
    });
  }

  ngOnInit() {
    this.video = { id: null, title: "", length: null, description: "" };
    this.videoDiffer = this.differs.find(this.video).create();
  }

  ngDoCheck(): void {
    const changes = this.videoDiffer.diff(this.video);
    if (changes) {
      if (this.video.id) {
        this.videos.add(this.video);
      }
    }
  }
}
