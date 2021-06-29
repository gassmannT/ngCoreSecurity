import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  AuthModule,
  LogLevel,
  OidcConfigService,
  OidcSecurityService,
} from 'angular-auth-oidc-client';

export function loadConfig(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      stsServer:
        'https://login.microsoftonline.com/d3450f80-7150-46aa-bfab-194c2ff90391/v2.0',
      authWellknownEndpoint: 'https://login.microsoftonline.com/common/v2.0',
      redirectUrl: window.location.origin,
      clientId: 'c9606843-9a7e-4eab-b550-46037161d570',
      scope:
        'openid profile offline_access email api://a91d1509-4e6a-4dda-b3b2-4264ce77a931/Data.Read api://a91d1509-4e6a-4dda-b3b2-4264ce77a931/Data.ReadWrite',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      ignoreNonceAfterRefresh: true,
      maxIdTokenIatOffsetAllowedInSeconds: 600,
      issValidationOff: false, // this needs to be true if using a common endpoint in Azure
      autoUserinfo: false,
      logLevel: LogLevel.Debug,
      customParams: {
        prompt: 'select_account', // login, consent
      },
    });
}

@NgModule({
  imports: [AuthModule.forRoot()],
  providers: [
    OidcSecurityService,
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}