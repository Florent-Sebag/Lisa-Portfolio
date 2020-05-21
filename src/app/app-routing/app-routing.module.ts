import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdVisuComponent } from '../pages/id-visu/id-visu.component';
import { HomeComponent } from '../pages/home/home.component';

export const appRouteList: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'identites-visuelles',
    component: IdVisuComponent
  }, 
];
