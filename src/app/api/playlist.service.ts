import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlaylistService {
  playlist$: Observable<any>;
  private playlistSubject = new Subject<any>();

  constructor() {
    this.playlist$ = this.playlistSubject.asObservable();
  }

  addVideo(data) {
    this.playlistSubject.next(data);
  }

}
