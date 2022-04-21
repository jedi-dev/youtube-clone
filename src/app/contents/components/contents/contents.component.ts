import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../../shared/services/video.service';
import {Observable} from 'rxjs';
import {SidebarService} from '../../../shared/services/sidebar.service';
import {VideoInterface} from '../../../shared/types/video.interface';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  sidebarMin$: Observable<boolean> | undefined
  videos$: Observable<VideoInterface[]> | undefined

  constructor(private videoService: VideoService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.videos$ = this.videoService.getVideo()
    this.sidebarMin$ = this.sidebarService.getSidebarMin()
  }
}
