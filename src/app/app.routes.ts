import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home-component/home-component.component';
import { Component } from '@angular/core';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';

const APP_ROUTES: Routes = [
  {path: 'splashScreen', component: SplashScreenComponent},
  { path: 'homePage', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);
