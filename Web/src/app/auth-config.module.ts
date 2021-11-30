import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://login.microsoftonline.com/<TENANTID>/v2.0',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '<ClientID>',
        scope: 'openid profile offline_access email <SCOPES>',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        ignoreNonceAfterRefresh: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true, // this needs to be true if using a common endpoint in Azure
        autoUserInfo: false,
        logLevel: LogLevel.Debug,
        customParamsAuthRequest: {
          prompt: 'select_account', // login, consent
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
