import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../../shared/services/video.service';
import {Observable} from 'rxjs';
import {VideoInterface} from '../../../shared/types/video.interface';
import {HeaderService} from '../../../shared/services/header.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  sidebarMin: boolean = false

  videos: Observable<VideoInterface[]> | undefined
  header: Observable<VideoInterface[]> | undefined

  constructor(private videoService: VideoService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.videos = this.videoService.getVideo()
    this.header = this.videoService.getAvatar()
    this.headerService.onClick.subscribe(sidebar => this.sidebarMin = sidebar)
  }

  amountDays(dateSent: Date) {
    const oneDay = 24 * 60 * 60 * 1000
    const currentDate = new Date()
    dateSent = new Date(dateSent)

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) / oneDay)
  }

}
