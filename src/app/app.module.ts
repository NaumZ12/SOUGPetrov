import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, PageComponent, SubPageComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLinksComponent } from './components/nav-bar/nav-links/nav-links.component';
import { LangComponent } from './components/footer/lang/lang.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    NavBarComponent,
    NavLinksComponent,
    CarouselComponent,
    FooterComponent,
    PageComponent,
    SubPageComponent,
    LangComponent,
    NewsFeedComponent,




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
    AppRoutingModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
