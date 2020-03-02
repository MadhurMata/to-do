import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { ListComponent } from './core/components/list/list.component';
import { HomeComponent } from './core/components/home-component/home-component.component';
import { BurguerMenuComponent } from './core/components/burguer-menu/burguer-menu.component';
import { TaskComponent } from './core/components/task/task.component';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    BurguerMenuComponent,
    TaskComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
