import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoInterface} from '../types/video.interface';
import {map, pluck} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

 public getVideo(): Observable<VideoInterface[]> {
    const url = `${environment.BASE_URL}playlistItems?part=snippet&maxResults=12&playlistId=PL6DxKON1uLOGtX2_vuBk-Z5Fzbm-DY0y1&key=${environment.API_KEY}`;

    return this.http.get<VideoInterface[]>(url)
      .pipe(
        map((response: any) => response.items.map((item: any) => item.snippet))
      )
  }
  public getAvatar(): Observable<VideoInterface[]> {
    const url = `${environment.BASE_URL}channels?part=snippet%2C%20statistics&id=UCDzGdB9TTgFm8jRXn1tBdoA&key=${environment.API_KEY}`;

    return this.http.get<VideoInterface[]>(url)
      .pipe(
        map((response: any) => response.items.map((item: any) => item.snippet))
      )
  }
}
