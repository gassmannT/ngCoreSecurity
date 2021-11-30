import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://login.microsoftonline.com/d3450f80-7150-46aa-bfab-194c2ff90391/v2.0',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'c9606843-9a7e-4eab-b550-46037161d570',
        scope:
          'openid profile offline_access email api://a91d1509-4e6a-4dda-b3b2-4264ce77a931/Data.Read api://a91d1509-4e6a-4dda-b3b2-4264ce77a931/Data.ReadWrite',
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
