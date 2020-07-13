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
import { SuneliaComponent } from './pages/web/more/sunelia/sunelia.component';
import { CaisseDepargneComponent } from './pages/print/more/caisse-depargne/caisse-depargne.component';
import { CarnetArtistesComponent } from './pages/print/more/carnet-artistes/carnet-artistes.component';
import { FetartRueComponent } from './pages/print/more/fetart-rue/fetart-rue.component';
import { InbodyComponent } from './pages/print/more/inbody/inbody.component';
import { JardinerieComponent } from './pages/print/more/jardinerie/jardinerie.component';
import { SeptFamillesComponent } from './pages/print/more/sept-familles/sept-familles.component';
import { JoseComponent } from './pages/print/more/jose/jose.component';
import { PolynomeComponent } from './pages/print/more/polynome/polynome.component';
import { TruismesComponent } from './pages/print/more/truismes/truismes.component'

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
    SuneliaComponent,
    CaisseDepargneComponent,
    CarnetArtistesComponent,
    FetartRueComponent,
    InbodyComponent,
    JardinerieComponent,
    SeptFamillesComponent,
    JoseComponent,
    PolynomeComponent,
    TruismesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
