import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ProgressBoardComponent } from './components/progress-board/progress-board.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { LogoutButtonComponent } from './shared/logout-button/logout-button.component';
import { ProfileComponent } from './shared/profile/profile.component';

export const routes: Routes = [
    { 
        path: '', component: ProgressBoardComponent
    },
    { 
        path: 'home', component: HomeComponent
    },
    { 
        path: 'update', component: ProgressBoardComponent
    },
    { 
        path: 'login', component: LoginButtonComponent
    },
    { 
        path: 'logout', component: LogoutButtonComponent
    },
    { 
        path: 'callback', component: ProfileComponent
    },
];
