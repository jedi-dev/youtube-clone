import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './components/contents/contents.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InterestsFilterComponent } from './components/interests-filter/interests-filter.component';



@NgModule({
  declarations: [
    ContentsComponent,
    SidebarComponent,
    InterestsFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    ContentsComponent
  ]
})
export class ContentsModule { }
