import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './components/guide/guide.component';



@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GuideComponent
  ]
})
export class GuideModule { }
