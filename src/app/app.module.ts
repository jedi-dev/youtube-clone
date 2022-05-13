import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageModule} from './home-page/home-page.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HeaderModule} from './shared/modules/header/header.module';
import {SearchPageModule} from './search-page/search-page.module';
import {SidebarModule} from './shared/modules/sidebar/sidebar.module';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { SubscriptionsPageComponent } from './subscriptions-page/subscriptions-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import {VideoPageModule} from './video-page/video-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ExplorePageComponent,
    SubscriptionsPageComponent,
    LibraryPageComponent,
    HistoryPageComponent,
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      HomePageModule,
      FormsModule,
      HeaderModule,
      SearchPageModule,
      SidebarModule,
      VideoPageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
