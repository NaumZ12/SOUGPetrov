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


const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
      path:  '',
      component: HomePageComponent
    },
    {
      path: 'otvoreni_casovi',
      component: OtvoreniCasoviPageComponent,
    },
    {
      path: 'about',
      component: ProektiPageComponent,
    },
    {
      path: 'nasoki',
      component: ProektiPageComponent,
    },
    {
      path: 'upisi',
      component: ProektiPageComponent,
    },
    {
      path: 'predmeti',
      component: ProektiPageComponent,
    },
    {
      path: 'dokumenti',
      component: ProektiPageComponent,
    },
    {
      path: 'contackt',
      component: ProektiPageComponent,
    },
    {
      path: 'raspored',
      component: ProektiPageComponent,
    },
    {
      path: 'novosti',
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


export const PageComponent = [MainPagesComponent, AuthPageComponent ]
export const SubPageComponent = [HomePageComponent,NovostiPageComponent, SigninPageComponent,SearchPageComponent,  SignupPageComponent,   OtvoreniCasoviPageComponent, ProektiPageComponent  ]
export const NovostPageComponent = [OneComponent, TwoComponent]
