import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { IdVisuComponent } from './pages/id-visu/id-visu.component';
import { RouterModule, Routes } from '@angular/router';
import { appRouteList } from './app-routing/app-routing.module';
import { WebComponent } from './pages/web/web.component';
import { PrintComponent } from './pages/print/print.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    IdVisuComponent,
    WebComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
