import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdVisuComponent } from '../pages/id-visu/id-visu.component';
import { HomeComponent } from '../pages/home/home.component';
import { WebComponent } from '../pages/web/web.component';
import { PrintComponent } from '../pages/print/print.component';
import { CmxRaceComponent } from '../pages/id-visu/more/cmx-race/cmx-race.component';

export const appRouteList: Routes = [
  { path: '', component: HomeComponent },


  { path: 'portfolio/print', component: PrintComponent },


  { path: 'portfolio/identites-visuelles', component: IdVisuComponent },
  { path: 'portfolio/identites-visuelles/more/cmx-race', component: CmxRaceComponent },

  { path: 'portfolio/web', component: WebComponent },
];
