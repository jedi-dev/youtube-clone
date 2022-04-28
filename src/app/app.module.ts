import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentsModule} from './contents/contents.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ContentsModule,
      FormsModule,
      HeaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
