import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {GuideModule} from './guide/guide.module';
import {ContentsModule} from './contents/contents.module';
import {InterestsFilterModule} from './shared/interests-filter/interests-filter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    GuideModule,
    InterestsFilterModule,
    ContentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
