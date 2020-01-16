import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoService } from "src/app/api/video.service";
import { Video } from "../video";
import { Router } from "@angular/router";
import { CustomValidator } from './custom-validator';

@Component({
  selector: "app-video-form",
  templateUrl: "./video-form.component.html",
  styleUrls: ["./video-form.component.scss"]
})
export class VideoFormComponent implements OnInit {
  videoForm = this.formBuilder.group({
    title: ["", Validators.compose([Validators.required,Validators.pattern('^[A-Z][a-zA-Z ]*')])],
    minutes: ["", Validators.compose([Validators.required,CustomValidator.timeValidator(0,60)])],
    seconds: ["", Validators.compose([Validators.required,CustomValidator.timeValidator(0,60)])],
    description: ["", Validators.maxLength(100)]
  });

  constructor(
    private formBuilder: FormBuilder,
    private videoService: VideoService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  calculateSeconds(video: FormGroup): number {
    return video.value.minutes * 60 + video.value.seconds;
  }

  openDialog(video: Video) {
    this.dialog.open(TitleTakenDialog, {
      data: {
        title: video.title
      }
    });
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
    const videoToSave: Video = this.createVideo();
    this.videoService.saveVideo(this.createVideo()).subscribe(
      res => console.log(),
      err => this.openDialog(videoToSave),
      () => this.router.navigate(["/videos"])
    );
  }
}

@Component({
  selector: 'title-already-taken-dialog',
  templateUrl: 'title-already-taken-dialog.html',
})
export class TitleTakenDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Video) {}
}