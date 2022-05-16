import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './components/video-page/video-page.component';
import {YouTubePlayerModule} from '@angular/youtube-player';



@NgModule({
  declarations: [
    VideoPageComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ]
})
export class VideoPageModule { }
