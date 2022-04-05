import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/main-pages/home-page/home-page.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { SigninPageComponent } from './pages/auth-page/signin-page/signin-page.component';

import { SignupPageComponent } from './pages/auth-page/signup-page/signup-page.component';
import { NovostiPageComponent } from './pages/main-pages/novosti-page/novosti-page.component';
import { OneComponent } from './pages/main-pages/novosti-page/one/one.component';
import { TwoComponent } from './pages/main-pages/novosti-page/two/two.component';
import { EngPagesComponent } from './pages/eng-pages/eng-pages.component';
import { EngHomePageComponent } from './pages/eng-pages/home-page/home-page.component';

import { EngNovostiPageComponent } from './pages/eng-pages/novosti-page/novosti-page.component';
import { EngOneComponent } from './pages/eng-pages/novosti-page/one/one.component';
import { EngTwoComponent } from './pages/eng-pages/novosti-page/two/two.component';
import { EngNasokiPageComponent } from './pages/eng-pages/nasoki-page/nasoki-page.component';
import { NasokiPageComponent } from './pages/main-pages/nasoki-page/nasoki-page.component';
import { GoPageComponent } from './pages/main-pages/nasoki-page/go-page/go-page.component';
import { EsPageComponent } from './pages/main-pages/nasoki-page/es-page/es-page.component';
import { MsPageComponent } from './pages/main-pages/nasoki-page/ms-page/ms-page.component';
import { UsPageComponent } from './pages/main-pages/nasoki-page/us-page/us-page.component';
import { EngGoPageComponent } from './pages/eng-pages/nasoki-page/go-page/go-page.component';
import { EngEsPageComponent } from './pages/eng-pages/nasoki-page/es-page/es-page.component';
import { EngMsPageComponent } from './pages/eng-pages/nasoki-page/ms-page/ms-page.component';
import { EngUsPageComponent } from './pages/eng-pages/nasoki-page/us-page/us-page.component';
import { NasokaComponent } from './pages/main-pages/nasoki-page/nasoka/nasoka.component';
import { EngAboutPageComponent } from './pages/eng-pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/main-pages/contact-page/contact-page.component';
import { UpisiPageComponent } from './pages/main-pages/upisi-page/upisi-page.component';
import { AboutPageComponent } from './pages/main-pages/about-page/about-page.component';
import { EngUpisiPageComponent } from './pages/eng-pages/upisi-page/upisi-page.component';
import { EngContactPageComponent } from './pages/eng-pages/contact-page/contact-page.component';
import { UpEsPageComponent } from './pages/main-pages/upisi-page/es-page/es-page.component';
import { UpGoPageComponent } from './pages/main-pages/upisi-page/go-page/go-page.component';
import { UpUsPageComponent } from './pages/main-pages/upisi-page/us-page/us-page.component';
import { UpMsPageComponent } from './pages/main-pages/upisi-page/ms-page/ms-page.component';
import { UpisComponent } from './pages/main-pages/upisi-page/upis/upis.component';
import { VuPageComponent } from './pages/main-pages/upisi-page/vu-page/vu-page.component';




const routes: Routes = [
  {
    path: 'mk',
    component: MainPagesComponent,
    children: [
      {
      path:  'home',
      data: {title: "ДОМА"},
      component: HomePageComponent
    },

    {
      path: 'about',
      component: AboutPageComponent,
      data: {title: "ЗА ГИМНАЗИЈАТА"},

    },
    {
      path: 'nasoki',
      component: NasokiPageComponent,
      children:[
        {
          path: 'izberi_nasoka',
          component: NasokaComponent,
        },
        {
          path: 'gimnazisko_obrazovanie',
          component: GoPageComponent,
        },
        {
          path: 'elektrotexnicka_struka',
          component: EsPageComponent,
        },
        {
          path: 'masinska_struka',
          component: MsPageComponent,
        },
        {
          path: 'ugostitelska_struka',
          component: UsPageComponent,
        },

      ]
    },
    {
      path: 'upisi',
      data: {title: "УПИСИ"},
      component: UpisiPageComponent,
      children:[
        {
          path: 'izberi',
          component: UpisComponent
        },
        {
          path: 'upis_elktrotexnicka_struka',
          component: UpEsPageComponent
        },
        {
          path: 'upis_opsta_gimnazija',
          component: UpGoPageComponent
        },
        {
          path: 'upis_masinska_struka',
          component: UpMsPageComponent
        },
        {
          path: 'upis_ugostitelska_struka',
          component: UpUsPageComponent
        },
        {
          path: 'upis_za_vonredni_ucenici',
          component: VuPageComponent
        },
      ]

    },
    {
      path: 'contackt',
      data: {title: "КОНТАКТ"},
      component: ContactPageComponent,
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



    ]
  },

  {
    path: 'en',
    component: EngPagesComponent,
    children: [

      {
        path:  'home',
        data: {title: "ДОМА"},
        component: EngHomePageComponent
      },

      {
        path: 'about',
        component: EngAboutPageComponent,
        data: {title: "ЗА ГИМНАЗИЈАТА"},

      },
      {
        path: 'nasoki',
        data: {title: "НАСОКИ"},
        component: EngNasokiPageComponent,

      },
      {
        path: 'upisi',
        data: {title: "УПИСИ"},
        component: EngUpisiPageComponent,
        children:[
          {
            path: 'izberi',
            component: UpisComponent,
          },
          {
            path: 'upis_elktrotexnicka_struka',
            component: UpEsPageComponent,
          },
          {
            path: 'upis_opsta_gimnazija',
            component: UpGoPageComponent,
          },
          {
            path: 'upis_masinska_struka',
            component: UpMsPageComponent,
          },
          {
            path: 'upis_ugostitelska_Struka',
            component: UpUsPageComponent,
          },
          {
            path: 'upis_za_vonredni_ucenici',
            component: VuPageComponent,
          },
        ]
      },
      {
        path: 'contackt',
        data: {title: "КОНТАКТ"},
        component: EngContactPageComponent,
      },
      {
        path: 'novosti',
        data: {title: "НОВОСТИ"},
        component: EngNovostiPageComponent,
        children:[
          {path: "one", component: EngOneComponent},
          {path: "two", component: EngTwoComponent},

        ]
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


export const PageComponent = [
  MainPagesComponent,
   AuthPageComponent,
    EngPagesComponent
]

export const SubPageComponent = [HomePageComponent,
   EngHomePageComponent,
   NovostiPageComponent,
   EngNovostiPageComponent,
   SigninPageComponent,
   SignupPageComponent,
   NasokiPageComponent,
   EngNasokiPageComponent,
   GoPageComponent,
   EsPageComponent,
   MsPageComponent,
   UsPageComponent,
   EngGoPageComponent,
   EngEsPageComponent,
   EngMsPageComponent,
   EngUsPageComponent,
   NasokaComponent,
   UpisiPageComponent,
   AboutPageComponent,
   ContactPageComponent,
   EngUpisiPageComponent,
   EngAboutPageComponent,
   UpEsPageComponent,
   UpGoPageComponent,
   UpUsPageComponent,
   UpMsPageComponent,
   VuPageComponent,
   UpisComponent,


]
export const NovostPageComponent = [
  OneComponent,
  TwoComponent,
  EngOneComponent,
  EngTwoComponent
]
