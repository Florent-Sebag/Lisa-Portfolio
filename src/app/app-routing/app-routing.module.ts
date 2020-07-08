import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdVisuComponent } from '../pages/id-visu/id-visu.component';
import { HomeComponent } from '../pages/home/home.component';
import { WebComponent } from '../pages/web/web.component';
import { PrintComponent } from '../pages/print/print.component';
import { CmxRaceComponent } from '../pages/id-visu/more/cmx-race/cmx-race.component';
import { SaintFideleComponent } from '../pages/id-visu/more/saint-fidele/saint-fidele.component';
import { TypographieComponent } from '../pages/id-visu/more/typographie/typographie.component';
import { WorldPastaDayComponent } from '../pages/id-visu/more/world-pasta-day/world-pasta-day.component';
import { BambouComponent } from '../pages/web/more/bambou/bambou.component';
import { EmailingComponent } from '../pages/web/more/emailing/emailing.component';
import { MbrComponent } from '../pages/web/more/mbr/mbr.component';
import { SuneliaComponent } from '../pages/web/more/sunelia/sunelia.component';

export const appRouteList: Routes = [
  { path: '', component: HomeComponent },


  { path: 'portfolio/print', component: PrintComponent },


  { path: 'portfolio/identites-visuelles', component: IdVisuComponent },
  { path: 'portfolio/identites-visuelles/more/cmx-race', component: CmxRaceComponent },
  { path: 'portfolio/identites-visuelles/more/saint-fidele', component: SaintFideleComponent },
  { path: 'portfolio/identites-visuelles/more/typographie', component: TypographieComponent },
  { path: 'portfolio/identites-visuelles/more/world-pasta-day', component: WorldPastaDayComponent },

  { path: 'portfolio/web', component: WebComponent },
  { path: 'portfolio/web/more/bambouseraie', component: BambouComponent },
  { path: 'portfolio/web/more/emailing', component: EmailingComponent },
  { path: 'portfolio/web/more/mbr', component: MbrComponent },
  { path: 'portfolio/web/more/sunelia', component: SuneliaComponent },

];
