import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../../shared/services/search.service';
import {VideoService} from '../../../shared/services/video.service';
import {Observable, Subscription} from 'rxjs';
import {VideoInterface} from '../../../shared/types/video.interface';
import {SidebarService} from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  search!: string
  subscription?: Subscription
  videos$: Observable<VideoInterface[]> | undefined
  sidebarMin$: Observable<boolean> | undefined

  constructor(
    private searchService: SearchService,
    private videoService: VideoService,
    private sidebarService: SidebarService
    ) { }

  ngOnInit(): void {
    this.subscription = this.searchService.search$.subscribe(data => this.search = data)
    this.videos$ = this.videoService.getSearch(this.search)
    this.sidebarMin$ = this.sidebarService.getSidebarMin()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
