import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/main-pages/home-page/home-page.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { SigninPageComponent } from './pages/auth-page/signin-page/signin-page.component';
import { OtvoreniCasoviPageComponent } from './pages/main-pages/otvoreni-casovi-page/otvoreni-casovi-page.component';
import { ProektiPageComponent } from './pages/main-pages/proekti-page/proekti-page.component';
import { SignupPageComponent } from './pages/auth-page/signup-page/signup-page.component';
import { NovostiPageComponent } from './pages/main-pages/novosti-page/novosti-page.component';
import { OneComponent } from './pages/main-pages/novosti-page/one/one.component';
import { TwoComponent } from './pages/main-pages/novosti-page/two/two.component';
import { SearchPageComponent } from './pages/main-pages/search-page/search-page.component';
import { EngPagesComponent } from './pages/eng-pages/eng-pages.component';




const routes: Routes = [
  {
    path: 'mk',
    component: MainPagesComponent,
    children: [
      {
        path: 'search',
        component: SearchPageComponent,
        data: {title: "SEARCH"},
        children: [{path: ':searchItem', component: SearchPageComponent}]
      },
      {
      path:  'home',
      data: {title: "ДОМА"},
      component: HomePageComponent
    },

    {
      path: 'about',
      component: ProektiPageComponent,
      data: {title: "ЗА ГИМНАЗИЈАТА"},

    },
    {
      path: 'nasoki',
      data: {title: "НАСОКИ"},
      component: ProektiPageComponent,
    },
    {
      path: 'upisi',
      data: {title: "УПИСИ"},
      component: ProektiPageComponent,
    },
    {
      path: 'contackt',
      data: {title: "КОНТАКТ"},
      component: ProektiPageComponent,
    },
    {
      path: 'novosti',
      data: {title: "НОВОСТИ"},
      component: NovostiPageComponent,
      children:[
        {path: "one", component: OneComponent},
        {path: "two", component: TwoComponent},

      ]
    },
    {
      path: 'proekti',
      component: ProektiPageComponent,
    },
    {
      path: 'e-nastava',
      component: ProektiPageComponent,
    },

    ]
  },

  {
    path: 'en',
    component: EngPagesComponent,
  },




  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      {
        path: 'signin',
        component: SigninPageComponent,
      },
      {
        path: 'signup',
        component: SignupPageComponent,
      }
    ]


  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }


export const PageComponent = [MainPagesComponent, AuthPageComponent, EngPagesComponent ]
export const SubPageComponent = [HomePageComponent,NovostiPageComponent, SigninPageComponent,SearchPageComponent,  SignupPageComponent,   OtvoreniCasoviPageComponent, ProektiPageComponent  ]
export const NovostPageComponent = [OneComponent, TwoComponent]
