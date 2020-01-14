import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
