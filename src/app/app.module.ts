import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbuttonComponent } from './nbutton/nbutton.component';
import { MainComponent } from './main/main.component';
import { WorksComponent } from './works/works.component';
import { NavBtnComponent } from './nav-btn/nav-btn.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NbuttonComponent,
    MainComponent,
    WorksComponent,
    NavBtnComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
