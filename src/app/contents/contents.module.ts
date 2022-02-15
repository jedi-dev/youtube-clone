import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './components/contents/contents.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    ContentsComponent
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
