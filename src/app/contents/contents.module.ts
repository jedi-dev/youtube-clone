import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './components/contents/contents.component';



@NgModule({
  declarations: [
    ContentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentsComponent
  ]
})
export class ContentsModule { }
