import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { CoolListComponent } from './cool-list/cool-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoolListComponent
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
