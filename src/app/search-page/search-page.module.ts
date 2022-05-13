import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SearchPageModule { }
