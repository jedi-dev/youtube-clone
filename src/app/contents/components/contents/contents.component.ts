import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoService} from '../../../shared/services/video.service';
import {Observable, Subscription} from 'rxjs';
import {VideoInterface} from '../../../shared/types/video.interface';
import {SidebarService} from '../../../shared/services/sidebar.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit, OnDestroy {
  sidebarMin?: boolean
  sidebarMinSubscription?: Subscription
  videos$: Observable<any> | undefined

  constructor(private videoService: VideoService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.videos$ = this.videoService.getVideo().pipe(
      map((response: any) => response.items.map((item: any) => item))
    )
    this.sidebarMinSubscription = this.sidebarService.onClick.subscribe(
      data => this.sidebarMin = data
    )
  }
  ngOnDestroy() {
    this.sidebarMinSubscription?.unsubscribe()
  }

  amountDays(dateSent: Date) {
    const oneDay = 24 * 60 * 60 * 1000
    const currentDate = new Date()
    dateSent = new Date(dateSent)

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) / oneDay)
  }

}
