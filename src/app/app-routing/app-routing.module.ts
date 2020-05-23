import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdVisuComponent } from '../pages/id-visu/id-visu.component';
import { HomeComponent } from '../pages/home/home.component';
import { WebComponent } from '../pages/web/web.component';
import { PrintComponent } from '../pages/print/print.component';

export const appRouteList: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/print', component: PrintComponent },
  { path: 'portfolio/identites-visuelles', component: IdVisuComponent }, 
  { path: 'portfolio/web', component: WebComponent },
];
