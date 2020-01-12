import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Video } from './video/video';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  model = '/videos';
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${API_URL}${this.model}`;
  }

  allVideos() {
    return this.http.get<Video[]>(this.getUrl(), this.httpOptions);
  }
}
