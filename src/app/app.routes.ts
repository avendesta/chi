import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ProgressBoardComponent } from './components/progress-board/progress-board.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { LogoutButtonComponent } from './shared/logout-button/logout-button.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { 
        path: '', component: ProgressBoardComponent, canActivate: [authGuard],
    },
    { 
        path: 'home', component: HomeComponent, canActivate: [authGuard]
    },
    { 
        path: 'update', component: ProgressBoardComponent, canActivate: [authGuard]
    },
    { 
        path: 'login', component: LoginButtonComponent
    },
    { 
        path: 'logout', component: LogoutButtonComponent, canActivate: [authGuard]
    },
    { 
        path: 'callback', component: ProfileComponent, canActivate: [authGuard]
    },
];
