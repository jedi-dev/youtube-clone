import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoInterface} from '../types/video.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

 public getVideo(): Observable<any> {
    const url = `${environment.BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=RU&key=${environment.API_KEY}`;

    return this.http.get<any>(url)
  }
}
