import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoInterface} from '../types/video.interface';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public getVideo(): Observable<VideoInterface[]> {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=PL1N6sf2mpE8_FVbdTdVglEXDyDCepc4DG&key=${environment.API_KEY}`;

    return this.http.get<VideoInterface[]>(url)
      .pipe(
        map((response: any) => response.items)
      )
  }
}
