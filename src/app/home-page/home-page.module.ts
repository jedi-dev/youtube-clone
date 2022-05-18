import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { SidebarComponent } from '../shared/modules/sidebar/components/sidebar/sidebar.component';
import { InterestsFilterComponent } from './components/interests-filter/interests-filter.component';
import { DateOfCreationPipe } from '../shared/pipes/date-of-creation.pipe';
import { VideoViewsPipe } from '../shared/pipes/video-views.pipe';


@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    InterestsFilterComponent,
    DateOfCreationPipe,
    VideoViewsPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    DateOfCreationPipe,
    VideoViewsPipe
  ]
})
export class HomePageModule { }
