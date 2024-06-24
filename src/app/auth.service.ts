import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get token() {
    return this.oauthService.getAccessToken();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get username(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      return (claims as any).preferred_username || (claims as any).email || 'Unknown';
    }
    return 'Unknown';
  }

  get email(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      return (claims as any).email || 'Unknown';
    }
    return 'Unknown';
  }
}