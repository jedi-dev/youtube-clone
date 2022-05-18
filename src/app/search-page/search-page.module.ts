import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {HomePageModule} from '../home-page/home-page.module';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HomePageModule
    ]
})
export class SearchPageModule { }
