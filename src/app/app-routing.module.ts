import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/components/home-page/home-page.component';
import {SearchPageComponent} from './search-page/components/search-page/search-page.component';
import {ExplorePageComponent} from './explore-page/explore-page.component';
import {SubscriptionsPageComponent} from './subscriptions-page/subscriptions-page.component';
import {LibraryPageComponent} from './library-page/library-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {VideoPageComponent} from './video-page/components/video-page/video-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'explore', component: ExplorePageComponent},
  {path: 'subscriptions', component: SubscriptionsPageComponent},
  {path: 'library', component: LibraryPageComponent},
  {path: 'history', component: HistoryPageComponent},
  {path: 'video', component: VideoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
