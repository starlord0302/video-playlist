import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.scss']
})
export class VideoTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'length', 'description'];
  @Input() dataSource: Video[];

  constructor() { }

  ngOnInit() {
  }

}
