import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  get username(): string {
    return this.authService.username;
  }

  get email(): string {
    return this.authService.email;
  }

  logout() {
    this.authService.logout();
  }
}
