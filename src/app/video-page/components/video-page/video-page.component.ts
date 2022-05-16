import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  id?: string
  constructor(private readonly route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
  }

  ngOnInit(): void {
  }

}
