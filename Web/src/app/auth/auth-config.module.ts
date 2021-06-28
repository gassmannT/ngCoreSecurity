import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  AuthModule,
  LogLevel,
  OidcConfigService,
} from 'angular-auth-oidc-client';

export function configureAuth(
  oidcConfigService: OidcConfigService
): () => Promise<any> {
  return () =>
    // oidcConfigService.withConfig({
    //   stsServer:
    //     'https://login.microsoftonline.com/68ccafad-c94a-416a-92cf-e312efad9100/v2.0/',
    //   authWellknownEndpoint: 'https://login.microsoftonline.com/common/v2.0',
    //   redirectUrl: window.location.origin,
    //   clientId: 'd46284c5-5889-41dd-81b7-10f1adacfb99',
    //   scope: 'openid profile api://appdemoenvironment.tvd.com/read', // 'openid profile ' + your scopes
    //   responseType: 'code',
    //   silentRenew: true,
    //   maxIdTokenIatOffsetAllowedInSeconds: 600,
    //   issValidationOff: false,
    //   autoUserinfo: false,
    //   silentRenewUrl: window.location.origin + '/silent-renew.html',
    //   customParams: {
    //     prompt: 'select_account', // login, consent
    //   },
    //   logLevel: LogLevel.Debug,
    // });

    oidcConfigService.withConfig({
      stsServer:
        'https://login.microsoftonline.com/d3450f80-7150-46aa-bfab-194c2ff90391/v2.0/',
      authWellknownEndpoint: 'https://login.microsoftonline.com/common/v2.0',
      redirectUrl: window.location.origin,
      clientId: 'ce21fc61-2a8e-408f-9d2d-721b2ee516c7',
      scope:
        'openid profile offline_access email api://dwxsecuritybackend/weather.read api://dwxsecuritybackend/weather.readwrite', // 'openid profile ' + your scopes
      responseType: 'code',
      silentRenew: true,
      maxIdTokenIatOffsetAllowedInSeconds: 600,
      issValidationOff: true,
      autoUserinfo: false,
      silentRenewUrl: window.location.origin + '/silent-renew.html',
      useRefreshToken: true,
      logLevel: LogLevel.Debug,
      customParams: {
        prompt: 'select_account', // login, consent
      },
    });
}

@NgModule({
  imports: [AuthModule.forRoot()],
  exports: [AuthModule],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
})
export class AuthConfigModule {}
