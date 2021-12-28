import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsFilterComponent } from './components/interests-filter/interests-filter.component';



@NgModule({
  declarations: [
    InterestsFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InterestsFilterComponent
  ]
})
export class InterestsFilterModule { }
