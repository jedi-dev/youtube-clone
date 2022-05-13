import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../../shared/services/video.service';
import {Observable} from 'rxjs';
import {SidebarService} from '../../../shared/services/sidebar.service';
import {VideoInterface} from '../../../shared/types/video.interface';

@Component({
  selector: 'app-home-page-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  sidebarMin$: Observable<boolean> | undefined
  videos$: Observable<VideoInterface[]> | undefined

  constructor(private videoService: VideoService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.videos$ = this.videoService.getData()
    this.sidebarMin$ = this.sidebarService.getSidebarMin()
  }
}
