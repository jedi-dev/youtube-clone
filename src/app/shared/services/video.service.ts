import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoInterface} from '../types/video.interface';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AppStateInterface} from '../types/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

 public getData(): Observable<VideoInterface[]> {
    const url = `${environment.BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=DE&key=${environment.API_KEY}`;

    return this.http.get<AppStateInterface>(url).pipe(
      map(response => response.items)
    )
  }
  public getSearch(query: string): Observable<VideoInterface[]> {
    const url = `${environment.BASE_URL}search?part=snippet&q=${query}&maxResults=5&regionCode=DE&key=${environment.API_KEY}`;

    return this.http.get<AppStateInterface>(url).pipe(
      map(response => response.items)
    )
  }
}
