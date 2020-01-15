import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { VideoService } from "src/app/video.service";
import { Video } from "../video";
import { Router } from "@angular/router";

@Component({
  selector: "app-video-form",
  templateUrl: "./video-form.component.html",
  styleUrls: ["./video-form.component.scss"]
})
export class VideoFormComponent implements OnInit {
  videoForm = this.formBuilder.group({
    title: [""],
    minutes: [""],
    seconds: [""],
    description: [""]
  });

  constructor(
    private formBuilder: FormBuilder,
    private videoService: VideoService,
    private router: Router
  ) {}

  ngOnInit() {}

  calculateSeconds(video: FormGroup): number {
    return video.value.minutes * 60 + video.value.seconds;
  }

  createVideo(): Video {
    return {
      id: null,
      title: this.videoForm.value.title,
      length: this.calculateSeconds(this.videoForm),
      description: this.videoForm.value.description
    };
  }

  saveVideo() {
    this.videoService.saveVideo(this.createVideo()).subscribe(
      res => console.log(),
      err => console.log(err),
      () => this.router.navigate(["/videos"])
    );
  }
}
