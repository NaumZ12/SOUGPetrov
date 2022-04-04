import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, PageComponent, SubPageComponent, NovostPageComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLinksComponent } from './components/nav-bar/nav-links/nav-links.component';
import { LangComponent } from './components/footer/lang/lang.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NavFeedComponent } from './components/nav-feed/nav-feed.component';
import { NovostComponent } from './pages/main-pages/novosti-page/novost/novost.component';


import {NgxPaginationModule} from 'ngx-pagination';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    NavLinksComponent,
    CarouselComponent,
    FooterComponent,
    PageComponent,
    SubPageComponent,
    LangComponent,
    NewsFeedComponent,
    NavFeedComponent,
    NovostComponent,
    NovostPageComponent,
    TextComponent,
    SearchBarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
