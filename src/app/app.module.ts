import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { NewsFeedComponent } from './Components/news-feed/news-feed.component';
import { PostComponent } from './Components/news-feed/post/post.component';
import { NewsFeedService } from './Services/news-feed.service';
import { LeftSidebarComponent } from './Components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './Components/right-sidebar/right-sidebar.component';
import { NavbarComponent } from './Components/partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsFeedComponent,
    PostComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    TimeAgoPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
