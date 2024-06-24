import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-7z5dvqj2cb2ik6m3.us.auth0.com/',
  redirectUri: window.location.origin + '/callback',
  clientId: 'Lr5E9fn0eaWHYfjQpcJsh8ZVW87nIV1z',
  scope: 'openid profile email',
  responseType: 'code',
  showDebugInformation: true,
  requireHttps: false, // set to true in production,
  strictDiscoveryDocumentValidation: false
};