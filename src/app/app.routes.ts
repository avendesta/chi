import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '', component: AppComponent
    },
    { 
        path: 'home', component: HomeComponent
     },
];
