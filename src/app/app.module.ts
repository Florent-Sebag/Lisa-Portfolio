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
import { PrintComponent } from './pages/print/print.component';
import { CmxRaceComponent } from './pages/id-visu/more/cmx-race/cmx-race.component';
import { SaintFideleComponent } from './pages/id-visu/more/saint-fidele/saint-fidele.component';
import { WorldPastaDayComponent } from './pages/id-visu/more/world-pasta-day/world-pasta-day.component';
import { TypographieComponent } from './pages/id-visu/more/typographie/typographie.component';
import { BambouComponent } from './pages/web/more/bambou/bambou.component';
import { EmailingComponent } from './pages/web/more/emailing/emailing.component';
import { MbrComponent } from './pages/web/more/mbr/mbr.component';
import { SuneliaComponent } from './pages/web/more/sunelia/sunelia.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    IdVisuComponent,
    WebComponent,
    PrintComponent,
    CmxRaceComponent,
    SaintFideleComponent,
    WorldPastaDayComponent,
    TypographieComponent,
    BambouComponent,
    EmailingComponent,
    MbrComponent,
    SuneliaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
