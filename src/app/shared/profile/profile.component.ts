import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isAuthenticated$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$();
  }

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
