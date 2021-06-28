import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log('is authenticated', auth);
      this.loggedIn = auth;
    });
  }

  login() {
    console.log('login');
    this.oidcSecurityService.authorize();
  }

  logout() {
    console.log('logout');
    this.oidcSecurityService.logoff();
  }
}
