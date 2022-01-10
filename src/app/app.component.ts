import {Component, OnInit} from '@angular/core';
import {VideoService} from './shared/services/video.service';
import {Observable} from 'rxjs';
import {VideoInterface} from './shared/types/video.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  videos: Observable<VideoInterface[]> | undefined

  constructor(private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videos = this.videoService.getVideo();
  }
}
