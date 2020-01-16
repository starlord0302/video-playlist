import { Component, EventEmitter, OnInit, Input, OnChanges, Output } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Video } from '../video';
import { MatTableDataSource } from '@angular/material/table';
import { PlaylistService } from 'src/app/api/playlist.service';

@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.scss'],
  animations: [
    trigger('descriptionExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],  
})
export class VideoTableComponent implements OnChanges{

  displayedColumns: string[] = ['title', 'length'];
  @Input() videos: Video[];
  @Output() selected = new EventEmitter();
  dataSource = new MatTableDataSource([]);
  expandedElement: Video | null;

  ngOnChanges() {
    this.dataSource.data = this.videos as any;
  }

  convertSecondsToMinutes(length: number): string {
    const minutes = Math.floor((length / 60)) % 60;
    const seconds = length % 60;
    return `${minutes}:${seconds}`;
  }

  constructor() { }

}
