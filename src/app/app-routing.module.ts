import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentsComponent} from './contents/components/contents/contents.component';
import {WatchComponent} from './watch/watch/watch.component';

const routes: Routes = [
  {path: '', component: ContentsComponent},
  {path: 'watch', component: WatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
