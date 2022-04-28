import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FocusDirective } from './components/search/focus.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FocusDirective,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
