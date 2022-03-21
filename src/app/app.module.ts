import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLinksComponent } from './components/nav-bar/nav-links/nav-links.component';
import { LangComponent } from './components/header/lang/lang.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/main-pages/home-page/home-page.component';
import { FeedComponent } from './pages/main-pages/home-page/feed/feed.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    NavBarComponent,
    NavLinksComponent,
    LangComponent,
    MainPagesComponent,
    AuthPageComponent,
    HomePageComponent,
    FeedComponent,
    CarouselComponent,
    FooterComponent,




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
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }