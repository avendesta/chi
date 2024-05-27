import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ProgressBoardComponent } from './components/progress-board/progress-board.component';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent
    },
    { 
        path: 'home', component: HomeComponent
    },
    { 
        path: 'update', component: ProgressBoardComponent
    },
];
