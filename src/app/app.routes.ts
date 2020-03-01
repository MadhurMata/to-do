import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home-component/home-component.component';

const APP_ROUTES: Routes = [
  { path: 'homePage', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);
