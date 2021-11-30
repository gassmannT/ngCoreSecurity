import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$: Observable<any>;
  isAuthenticated: boolean;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(
      ({ isAuthenticated, allConfigsAuthenticated }) => {
        console.log(isAuthenticated, allConfigsAuthenticated);
        this.isAuthenticated = isAuthenticated;
      }
    );

    this.userData$ = this.oidcSecurityService.userData$;
  }
}
