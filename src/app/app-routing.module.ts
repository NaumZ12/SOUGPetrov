import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/main-pages/home-page/home-page.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { SigninPageComponent } from './pages/auth-page/signin-page/signin-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
      {
      path: '',
      component: HomePageComponent
    }
    ]
  },


  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      {
        path: 'signin',
        component: SigninPageComponent,
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
export const SubPageComponent = [HomePageComponent, SigninPageComponent ]
