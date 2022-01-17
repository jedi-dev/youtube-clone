import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentsComponent} from './contents/components/contents/contents.component';

const routes: Routes = [
  {path: '', component: ContentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
